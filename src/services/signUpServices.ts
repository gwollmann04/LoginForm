import { apiNEXT } from './apiNEXT'

type SignUpParam = {
  userName: string
  password: string
  email: string
}

export const signup = async (param: SignUpParam) =>
  apiNEXT.post('/api/signup', { ...param })
