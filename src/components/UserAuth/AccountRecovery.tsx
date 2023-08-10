import { Button } from '@chakra-ui/react'
import { useRouter } from 'next/router'

import { useForm, Controller } from 'react-hook-form'

import { accountRecoveryResolver } from '@/helpers/userAuthYupResolvers'

import { Input, WrapperLayout, H1 } from '@/components'
import { useCustomToast } from '@/hooks'
import { AccountRecoveryFormType } from '@/@types/userAuth'
import { recover } from '@/services/loginServices'

const AccountRecovery = () => {
  const { toast } = useCustomToast()
  const router = useRouter()

  const {
    control,
    formState: { isSubmitting, errors },
    handleSubmit
  } = useForm<AccountRecoveryFormType>({
    mode: 'onChange',
    resolver: accountRecoveryResolver,
    defaultValues: {
      email: ''
    }
  })

  const onSubmit = async (values: AccountRecoveryFormType) => {
    try {
      await recover({ ...values })

      toast({
        message: 'Account recovery email sent successfully.',
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
      <H1 fontSize='32px'>Email Recovery</H1>

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
        SUBMIT
      </Button>
    </WrapperLayout>
  )
}

export default AccountRecovery
