import { useToast } from '@chakra-ui/react'

import { useCustomToastProps } from '@/@types/customHooks'

export const useCustomToast = () => {
  const toastChakra = useToast()

  const toast = ({ message, type }: useCustomToastProps) => {
    toastChakra({
      description: message,
      status: type,
      duration: 3000,
      position: 'top-right',
      isClosable: true
    })
  }

  return { toast }
}
