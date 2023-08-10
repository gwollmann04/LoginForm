import { apiNEXT } from './apiNEXT'

type LoginParam = {
  userName: string
  password: string
}

export const login = async (param: LoginParam) =>
  apiNEXT.post('/api/login', { ...param })

type RecoverParam = {
  email: string
}

export const recover = async (param: RecoverParam) =>
  apiNEXT.post('/api/recover', { ...param })
