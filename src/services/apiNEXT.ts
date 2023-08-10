import axios from 'axios'

export const apiNEXT = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_NEXT_URL
})
