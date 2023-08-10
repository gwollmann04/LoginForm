import fs from 'fs'
import bcrypt from 'bcrypt'

import { NextApiRequest, NextApiResponse } from 'next'

import { extractFileData, buildFilePath } from '@/helpers/apiHandlers'

const signup = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req?.method === 'POST') {
      const userData = req?.body

      // Get all data from json file
      const filePath = buildFilePath('users')
      const data = extractFileData(filePath)

      // Calculate id for new user
      const indexOfLastEntry = data.length - 1
      const id = indexOfLastEntry === -1 ? 0 : data[indexOfLastEntry].id + 1

      const userName = data.find(
        (user: any) =>
          user.userName === userData?.userName || user.email === userData?.email
      )
      if (userName)
        return res.status(404).json({ message: 'User already registered.' })

      // Generate password and save User
      bcrypt.genSalt(10, (_: any, salt: any) => {
        bcrypt.hash(userData.password, salt, function (_: any, hash: any) {
          const newUser = {
            ...userData,
            id,
            createdAt: new Date(),
            password: hash
          }
          data.push(newUser)
          fs.writeFileSync(filePath, JSON.stringify(data))
        })
      })

      res.status(200).json({ message: 'Success' })
    }
  } catch (error) {
    return res.status(500).json({ message: 'Error, please try again later.' })
  }
}

export default signup
