import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { GiHamburgerMenu } from 'react-icons/gi'
import { BsSearch, BsXLg } from 'react-icons/bs'

import { useUiState } from './UiStateContext'
import { useSearch } from '../utils/useSearch'

export function TopNav({ children }) {
  const { toggleNav } = useUiState()
  const [searchInputValue, setSearchInputValue] = React.useState('')
  const searchResults = useSearch(searchInputValue)

  return (
    <nav className="z-10 flex fixed top-0 inset-x-0 flex-initial flex-row align-center justify-between gap-1 p-4 border-b border-gray-700 items-center">
      <div className="flex gap-2">
        <button onClick={toggleNav} className="md:hidden">
          <GiHamburgerMenu size={20} />
        </button>
        <Link href="/" passHref>
          <a className="text-gray-400 flex gap-1">
            <Image src="/favicon.ico" width={24} height={24} alt="rocket logo" />
            Home
          </a>
        </Link>
      </div>
      <div className="border-b border-gray-700 p-2 hidden md:flex focus-within:border-sky-500 transition-colors w-1/2 items-baseline">
        <BsSearch size={12} className="inline align-baseline" />
        <input
          value={searchInputValue}
          className="bg-transparent px-2 grow"
          onChange={(event) => setSearchInputValue(event.target.value)}
        />
        <button onClick={() => setSearchInputValue('')}>
          <BsXLg size={12} />
        </button>
      </div>
      <section className="flex flex-initial justify-between gap-4 row">{children}</section>
      {searchInputValue.length > 2 &&
        (searchResults.length > 0 ? (
          <div className="searchResult fixed inset-0 z-index-10 bg-black/50">
            <div className="flex flex-col gap-4 w-1/2 mx-auto mt-24">
              {searchResults.map((result) => (
                <Link key={result.id} passHref href={result.id}>
                  <a className="enforceVisible" onClick={() => setSearchInputValue('')}>
                    <div className="bg-sky-900 rounded-lg p-4 text-white hover:bg-sky-800 transition-colors">
                      {result.title}
                    </div>
                  </a>
                </Link>
              ))}
            </div>
          </div>
        ) : (
          <div className="searchResult fixed inset-0 z-index-10 bg-black/50">
            <div className="flex flex-col gap-4 w-1/2 mx-auto mt-24 text-center bg-gray-800 rounded-xl">
              <p>No search result were found for the term &quot;{searchInputValue}&quot;</p>
            </div>
          </div>
        ))}
      <style jsx>
        {`
          .searchResult {
            top: var(--top-nav-height);
          }
          .enforceVisible {
            opacity: 1 !important;
          }
        `}
      </style>
    </nav>
  )
}
