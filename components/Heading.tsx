import * as React from 'react'

const SIZE_MAP = {
  1: 'text-5xl pt-4 pb-6',
  2: 'text-3xl pt-2 pb-3',
  3: 'text-2lg pt-1 pb-2',
  4: 'text-lg pt-1 pb-2',
  5: 'text-base pt-1 pb-2',
  6: 'text-base pt-1 pb-2',
}

export function Heading({ id = '', level = 1, children, className }) {
  return React.createElement(
    `h${level}`,
    {
      id,
      className: [SIZE_MAP[level], className].filter(Boolean).join(' '),
    },
    children
  )
}
