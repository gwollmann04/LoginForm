import { Text, TextProps } from '@chakra-ui/react'

const H1 = ({ children, ...props }: TextProps) => {
  return (
    <Text color='#111111' alignSelf='center' fontSize='40px' mb='32px' {...props}>
      {children}
    </Text>
  )
}

export default H1
