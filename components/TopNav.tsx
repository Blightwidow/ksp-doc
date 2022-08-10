import React from 'react'
import Link from 'next/link'

export function TopNav({ children }) {
  return (
    <nav className="z-10 flex fixed top-0 inset-x-0 flex-initial flex-row align-center justify-between gap-1 p-4 border-b border-gray-700">
      <Link href="/" passHref>
        <a className="text-gray-400 flex gap-1">
          <img src="/favicon.ico" width={24} />
          Home
        </a>
      </Link>
      <section className="flex flex-initial justify-between gap-4 row">{children}</section>
    </nav>
  )
}
