import { createContext, useContext } from 'react'

import { useSelectedPrefCodeColors } from './useSelectedPrefCodeColors'

export const UsePrefColorContext = createContext({
  useSelectedPrefCodeColors,
})

/**
 * prefCode に対応する color を返す
 */
export const usePrefColor = (prefCode: number) => {
  const { useSelectedPrefCodeColors } = useContext(UsePrefColorContext)
  const codeColorMap = useSelectedPrefCodeColors()

  return codeColorMap.get(prefCode) ?? ''
}
