import { Input as ChakraInput, Text, Flex, FlexProps } from '@chakra-ui/react'

import { IfComponent } from '@/components'

interface InputProps extends FlexProps {
  errorMessage: string | undefined
  placeholder: string
  type?: string
  field: any
}

const Input = ({
  errorMessage,
  placeholder,
  field,
  type,
  ...props
}: InputProps) => {
  return (
    <Flex w='100%' maxW='576px' direction='column' {...props}>
      <ChakraInput
        autoComplete='off'
        textColor='black'
        focusBorderColor='#171425'
        borderColor='#E2E8F0'
        h='48px'
        w={['100%', '328px']}
        type={type}
        placeholder={placeholder}
        _placeholder={{ color: '#EEEEEE' }}
        {...field}
      />
      <IfComponent
        condition={!!errorMessage}
        component={
          <Text mt='6px' color='#222222' fontWeight='bold'>
            {errorMessage}
          </Text>
        }
      />
    </Flex>
  )
}

export default Input
