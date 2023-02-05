import { useAppSelector } from '@/store'

import { selectSelectedPrefCodesColorMap } from '../selectors'

export const useSelectedPrefCodeColors = () => useAppSelector(selectSelectedPrefCodesColorMap)
