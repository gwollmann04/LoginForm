import { CheckIcon } from '@chakra-ui/icons'
import { VStack } from '@chakra-ui/react'

import { WrapperLayout, H1 } from '@/components'

const MainPage = () => {
  return (
    <WrapperLayout goBackRoute='/login'>
      <VStack gap={['10px','18px']}>
        <CheckIcon boxSize='48px' />
        <H1 mb={0} fontSize={['22px','28px']}>Logged in successfully!</H1>
      </VStack>
    </WrapperLayout>
  )
}

export default MainPage
