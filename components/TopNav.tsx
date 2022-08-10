import React from 'react'
import Link from 'next/link'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useUiState } from './UiStateContext'

export function TopNav({ children }) {
  const { showNav, toggleNav } = useUiState()

  return (
    <nav className="z-10 flex fixed top-0 inset-x-0 flex-initial flex-row align-center justify-between gap-1 p-4 border-b border-gray-700">
      <div className="flex gap-2">
        <button onClick={toggleNav} className="md:hidden">
          <GiHamburgerMenu size={20} />
        </button>
        <Link href="/" passHref>
          <a className="text-gray-400 flex gap-1">
            <img src="/favicon.ico" width={24} />
            Home
          </a>
        </Link>
      </div>
      <section className="flex flex-initial justify-between gap-4 row">{children}</section>
    </nav>
  )
}
