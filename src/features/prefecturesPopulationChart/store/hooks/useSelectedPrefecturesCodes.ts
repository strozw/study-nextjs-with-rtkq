import { useAppSelector } from '@/store'

import { selectSelectedPrefCodes } from '../selectors'

export const useSelectedPrefecturesCodes = () => useAppSelector(selectSelectedPrefCodes)
