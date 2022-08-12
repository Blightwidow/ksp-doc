import { useLunr } from 'react-lunr'
import lunr from 'lunr'

import rawIndex from '../public/searchIndex.json'
import { pages } from '../public/searchMatch'

export function useSearch(query: string) {
  const index = lunr.Index.load(rawIndex)
  return useLunr<{ id: string; title: string }>(query, index, pages)
}
