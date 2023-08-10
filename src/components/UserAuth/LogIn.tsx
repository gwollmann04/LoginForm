import { useState } from 'react'
import { useRouter } from 'next/router'

import { Button, InputGroup, InputRightElement } from '@chakra-ui/react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { useForm, Controller } from 'react-hook-form'

import { logInResolver } from '@/helpers/userAuthYupResolvers'

import { Input, WrapperLayout, H1 } from '@/components'
import { useCustomToast } from '@/hooks'
import { LogInFormType } from '@/@types/userAuth'
import { login } from '@/services/loginServices'

const LogIn = () => {
  const [show, setShow] = useState(false)

  const { toast } = useCustomToast()
  const router = useRouter()

  const {
    control,
    formState: { isSubmitting, errors },
    handleSubmit
  } = useForm<LogInFormType>({
    mode: 'onChange',
    resolver: logInResolver,
    defaultValues: {
      userName: '',
      password: ''
    }
  })

  const onSubmit = async (values: LogInFormType) => {
    try {
      await login({ ...values })

      toast({
        message: 'Login was successful!',
        type: 'success'
      })
      router.push('/main')
    } catch (error: any) {
      toast({
        message:
          error?.response?.data?.message ?? 'Error, please try again later.',
        type: 'error'
      })
    }
  }

  const handleClickIcon = () => setShow(!show)
  const handleSignUp = () => router.push('/signup')

  const handleHelper = () => router.push('/recovery')

  return (
    <WrapperLayout onSubmit={handleSubmit(onSubmit)}>
      <H1>Login</H1>

      <Controller
        name='userName'
        control={control}
        render={({ field }) => (
          <Input
            placeholder='Username'
            errorMessage={errors?.userName?.message}
            mb='16px'
            field={field}
          />
        )}
      />
      <Controller
        name='password'
        control={control}
        render={({ field }) => (
          <InputGroup>
            <Input
              placeholder='Password'
              mb='16px'
              type={show ? 'text' : 'password'}
              errorMessage={errors?.password?.message}
              field={field}
            />
            <InputRightElement top='4px' _hover={{ cursor: 'pointer' }}>
              {show ? (
                <ViewIcon onClick={handleClickIcon} />
              ) : (
                <ViewOffIcon onClick={handleClickIcon} />
              )}
            </InputRightElement>
          </InputGroup>
        )}
      />

      <Button
        alignSelf='flex-end'
        mb='32px'
        variant='secondary'
        onClick={handleHelper}
      >
        Forgot Password?
      </Button>

      <Button
        mb='12px'
        type='submit'
        variant='primary'
        isLoading={isSubmitting}
      >
        LOGIN
      </Button>

      <Button
        alignSelf='center'
        variant='secondary'
        width='64px'
        onClick={handleSignUp}
      >
        Sign Up
      </Button>
    </WrapperLayout>
  )
}

export default LogIn
