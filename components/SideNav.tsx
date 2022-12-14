import React from 'react'
import { AiFillCaretDown } from 'react-icons/ai'
import { TbLayoutSidebarLeftCollapse } from 'react-icons/tb'
import { useRouter } from 'next/router'
import Link from 'next/link'

import { useUiState } from './UiStateContext'

const GET_STARTED_ITEMS = [
  { href: '/en/get-started', children: 'Overview' },
  { href: '/en/get-started/installation', children: 'Installation' },
  { href: '/en/get-started/differences-with-ksp', children: 'Differences with the base game' },
  { href: '/en/get-started/other-mods', children: 'Mod compatibility' },
  { href: '/en/get-started/science-playthrough', children: 'Science playthrough' },
]
const PLAYTHROUGH_HELP_ITEMS = [
  { href: '/en/playthrough-help', children: 'Overview' },
  { href: '/en/playthrough-help/karman-line', children: 'Karman Contract' },
  { href: '/en/playthrough-help/downrange', children: 'Downrange Contract' },
  { href: '/en/playthrough-help/first-orbit', children: 'First Orbit' },
  { href: '/en/playthrough-help/moon', children: 'The Moon' },
  { href: '/en/playthrough-help/going-forward', children: 'Going Forward' },
]
const SPACE_HISTORY_ITEMS = [
  { href: '/en/space-history', children: 'Overview' },
  { href: '/en/space-history/early-soviet', children: 'Early Soviet Era' },
  { href: '/en/space-history/early-usa', children: 'Early USA Era' },
  { href: '/en/space-history/moon-race', children: 'The Moon race' },
  { href: '/en/space-history/interplanetary-probes', children: 'Interplanetary probes' },
  { href: '/en/space-history/modern-rocketry', children: 'Modern rocketry' },
]
const SCIENCE_ITEMS = [
  { href: '/en/science', children: 'Overview' },
  { href: '/en/science/engines', children: 'Engines' },
  { href: '/en/science/fuels', children: 'Fuels' },
]

const TABS = [
  { items: GET_STARTED_ITEMS, children: 'Get Started' },
  { items: PLAYTHROUGH_HELP_ITEMS, children: 'Playthrough help' },
  { items: SPACE_HISTORY_ITEMS, children: 'Space history' },
  { items: SCIENCE_ITEMS, children: 'Science' },
]

export function SideNav() {
  const router = useRouter()
  const [activeTab, setActiveTab] = React.useState<number | null>(0)
  const { toggledNav, toggleNav } = useUiState()

  React.useEffect(() => {
    for (let i = 0; i < TABS.length; i++) {
      const links = TABS[i].items.map((item) => item.href)

      if (links.includes(router.pathname)) {
        setActiveTab(i)
      }
    }
  }, [router.pathname])

  const handleClick = React.useCallback(() => {
    if (typeof visualViewport !== 'undefined' && visualViewport.width <= 768) {
      toggleNav()
    }
  }, [toggleNav])

  return (
    <nav
      className={[
        toggledNav ? 'left-0 md:w-12' : '-left-full md:w-60',
        'sidenav bg-bgColor bottom-0 w-full fixed md:sticky flex-[0_0_auto] overlflow-y-auto overlflow-x-auto py-6 px-3 border-r border-gray-700 transition-all ease-in-out',
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <div className="flex-row justify-end mb-4 hidden md:flex">
        <button onClick={toggleNav}>
          <TbLayoutSidebarLeftCollapse
            size={20}
            className={['transition-transform ease-in-out', toggledNav && 'md:rotate-180']
              .filter(Boolean)
              .join(' ')}
          />
        </button>
      </div>
      <ul
        className={[
          toggledNav ? 'opacity-100 md:opacity-0' : 'opacity-0 md:opacity-100',
          'list-none flex flex-col transition-opacity text-clip md:w-56 ease-in-out',
        ]
          .filter(Boolean)
          .join(' ')}
      >
        <li className="ml-5">
          <Link href="/" passHref>
            <a
              onClick={handleClick}
              className={router.pathname === '/' ? 'text-primary' : 'text-gray-400'}
            >
              Home
            </a>
          </Link>
        </li>
        {TABS.map((tab, index) => {
          return (
            <li key={tab.children} className="mt-3">
              <button
                className="w-full text-left"
                onClick={() => (activeTab !== index ? setActiveTab(index) : setActiveTab(null))}
              >
                <AiFillCaretDown
                  className={[
                    'inline transition-transform mr-1 ease-in-out',
                    activeTab === index && 'rotate-180',
                  ]
                    .filter(Boolean)
                    .join(' ')}
                />
                {tab.children}
              </button>
              <ul
                aria-hidden={activeTab !== index}
                className={[
                  activeTab !== index ? 'max-h-0' : 'max-h-screen',
                  'list-none transition-all flex-col overflow-hidden pl-6 ease-in-out duration-300',
                ]
                  .filter(Boolean)
                  .join(' ')}
              >
                {tab.items.map((link) => (
                  <li key={link.href} className="my-2">
                    <Link href={link.href} passHref>
                      <a
                        onClick={handleClick}
                        className={router.pathname === link.href ? 'text-primary' : 'text-gray-400'}
                      >
                        {link.children}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          )
        })}
      </ul>
      <style jsx>
        {`
          .sidenav {
            height: calc(100vh - var(--top-nav-height));
          }
        `}
      </style>
    </nav>
  )
}
