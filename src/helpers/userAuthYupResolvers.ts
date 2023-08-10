import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

yup.setLocale({
  mixed: { required: 'Required field.' }
})

export const signUpResolver = yupResolver(
  yup.object().shape({
    userName: yup.string().required(),
    password: yup.string().required(),
    email: yup.string().email('Invalid E-mail').required()
  })
)

export const accountRecoveryResolver = yupResolver(
  yup.object().shape({
    email: yup.string().email('Invalid E-mail').required()
  })
)

export const logInResolver = yupResolver(
  yup.object().shape({
    userName: yup.string().required(),
    password: yup.string().required()
  })
)
