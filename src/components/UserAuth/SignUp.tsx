import { Button } from '@chakra-ui/react'
import { useRouter } from 'next/router'

import { useForm, Controller } from 'react-hook-form'

import { signUpResolver } from '@/helpers/userAuthYupResolvers'

import { Input, WrapperLayout, H1 } from '@/components'
import { useCustomToast } from '@/hooks'
import { SignUpFormType } from '@/@types/userAuth'
import { signup } from '@/services/signUpServices'

const SignUp = () => {
  const { toast } = useCustomToast()
  const router = useRouter()

  const {
    control,
    formState: { isSubmitting, errors },
    handleSubmit
  } = useForm<SignUpFormType>({
    mode: 'onChange',
    resolver: signUpResolver,
    defaultValues: {
      userName: '',
      password: '',
      email: ''
    }
  })

  const onSubmit = async (values: SignUpFormType) => {
    try {
      await signup({ ...values })

      toast({
        message: 'Sign Up was successful!',
        type: 'success'
      })
      router.push('/login')
    } catch (error: any) {
      toast({
        message:
          error?.response?.data?.message ?? 'Error, please try again later.',
        type: 'error'
      })
    }
  }

  return (
    <WrapperLayout goBackRoute='/login' onSubmit={handleSubmit(onSubmit)}>
      <H1>Sign Up</H1>

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
          <Input
            placeholder='Password'
            mb='16px'
            errorMessage={errors?.password?.message}
            field={field}
          />
        )}
      />

      <Controller
        name='email'
        control={control}
        render={({ field }) => (
          <Input
            placeholder='E-mail'
            mb='32px'
            errorMessage={errors?.email?.message}
            field={field}
          />
        )}
      />

      <Button
        type='submit'
        variant='primary'
        isLoading={isSubmitting}
      >
        SIGN UP
      </Button>
    </WrapperLayout>
  )
}

export default SignUp
