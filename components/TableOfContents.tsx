import React from 'react'
import Link from 'next/link'
import { TbLayoutSidebarLeftCollapse } from 'react-icons/tb'

export function TableOfContents({ toc }) {
  const items = toc.filter((item) => item.id && (item.level === 2 || item.level === 3))

  if (items.length <= 1) {
    return null
  }

  return (
    <nav className="hidden lg:block flex-[0_0_auto] sticky py-6 pl-3 pl-8 w-60 top-0">
      <p className="uppercase">On this page</p>
      <ul className="list-none flex flex-col transition-opacity text-clip w-56">
        {items.map((item) => {
          const href = `#${item.id}`
          const active = typeof window !== 'undefined' && window.location.hash === href

          return (
            <li
              key={item.title}
              className={[item.level === 3 ? 'pl-4' : undefined, 'mb-4'].filter(Boolean).join(' ')}
            >
              <Link href={href} passHref>
                <a className={active ? 'text-primary' : 'text-gray-400'}>{item.title}</a>
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
