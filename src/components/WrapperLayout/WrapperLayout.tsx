import { Flex, FlexProps } from '@chakra-ui/react'
import { ArrowBackIcon } from '@chakra-ui/icons'
import { useRouter } from 'next/router'

import { IfComponent } from '@/components'

interface WrapperLayoutProps extends FlexProps {
  goBackRoute?: string
}

const WrapperLayout = ({
  children,
  goBackRoute,
  ...props
}: WrapperLayoutProps) => {
  const router = useRouter()

  const handleGoBack = () => router.push(String(goBackRoute))

  return (
    <Flex align='center' justifyContent='center' w='100%' h='100vh'>
      <Flex
        border='1px black solid'
        borderRadius='24px'
        padding={['24px 12px', '48px 24px']}
        w='100%'
        maxW='376px'
        background='#7A7A7A'
        opacity='0.6'
        justifyContent='center'
        as='form'
        autoComplete='off'
        direction='column'
        mx='24px'
        {...props}
      >
        <IfComponent
          condition={!!goBackRoute}
          component={
            <ArrowBackIcon
              _hover={{ cursor: 'pointer' }}
              onClick={handleGoBack}
              boxSize='32px'
              mt={[0, '-16px']}
            />
          }
        />

        {children}
      </Flex>
    </Flex>
  )
}

export default WrapperLayout
