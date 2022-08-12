import * as React from 'react'

export function Callout({ title, children }) {
  return (
    <span className="callout flex flex-column p-4 bg-gray-700 rounded-lg mb-6">
      <strong>{title}</strong>
      <span>{children}</span>
      <style jsx>
        {`
          .callout :global(p) {
            margin: 0;
          }
        `}
      </style>
    </span>
  )
}
