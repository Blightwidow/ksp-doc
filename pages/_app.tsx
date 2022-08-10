import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

import { SideNav, TableOfContents, TopNav, UiStateContextProvider } from '../components'

import '../styles/globals.css'
import 'typeface-exo-2'

import type { AppProps } from 'next/app'

const TITLE = 'KSP Doc'
const DESCRIPTION = 'All you need to master the iconic mods of KSP'

function collectHeadings(node, sections = []) {
  if (node) {
    if (node.name === 'Heading') {
      const title = node.children[0]

      if (typeof title === 'string') {
        sections.push({
          ...node.attributes,
          title,
        })
      }
    }

    if (node.children) {
      for (const child of node.children) {
        collectHeadings(child, sections)
      }
    }
  }

  return sections
}

export default function MyApp({ Component, router, pageProps }: AppProps) {
  const { markdoc } = pageProps

  let title = TITLE
  let description = DESCRIPTION
  if (markdoc) {
    if (markdoc.frontmatter.title) {
      title = markdoc.frontmatter.title
    }
    if (markdoc.frontmatter.description) {
      description = markdoc.frontmatter.description
    }
  }

  const toc = pageProps.markdoc?.content ? collectHeadings(pageProps.markdoc.content) : []

  return (
    <UiStateContextProvider>
      <Head>
        <title>{router.pathname === '/' ? title : `KSP Doc | ${title}`}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="referrer" content="strict-origin" />
        <meta name="title" content={title} />
        <meta name="description" content={description} />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TopNav>
        <Link href="/en/about" passHref>
          <a className="text-gray-400">About</a>
        </Link>
        <Link href="https://github.com/Blightwidow/ksp-doc" passHref>
          <a className="text-gray-400">Contribute</a>
        </Link>
      </TopNav>
      <div className="content flex fixed w-screen flex-initial">
        <SideNav />
        <main className="flex column flex-auto px-8 overflow-auto ">
          <Component {...pageProps} />
          <TableOfContents toc={toc} />
        </main>
      </div>
      <style jsx>
        {`
          .content {
            top: var(--top-nav-height);
          }
          main {
            height: calc(100vh - var(--top-nav-height));
          }
        `}
      </style>
    </UiStateContextProvider>
  )
}
