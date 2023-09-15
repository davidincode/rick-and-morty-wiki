import { useAppDispatch, useAppSelector } from '../store/hook/useStore'
import {
  selectCharacter,
  setTargetedCharacter
} from '../store/slice/characterSlice'
import { resetPagingInfo } from '../store/slice/pagingSlice'

export const useSearch = () => {
  const dispatch = useAppDispatch()
  const { targeted: characterName } = useAppSelector(selectCharacter)

  const useSearchCharacter = (targetedCharacter: string) => {
    dispatch(resetPagingInfo())
    dispatch(setTargetedCharacter(targetedCharacter))
  }

  return { characterName, useSearchCharacter }
}
