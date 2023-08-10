import { NextApiRequest, NextApiResponse } from 'next'
import bcrypt from 'bcrypt'

import { extractFileData, buildFilePath } from '@/helpers/apiHandlers'

const login = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req?.method === 'POST') {
      const userData = req?.body

      // Get all data from json file
      const filePath = buildFilePath('users')
      const data = extractFileData(filePath)

      const user = data.find(
        (user: any) => user.userName === userData?.userName
      )
      if (!user) return res.status(404).json({ message: 'User not found.' })

      // Check if password is correct
      const isValidPassword = await bcrypt.compare(
        userData?.password,
        user?.password
      )

      return isValidPassword
        ? res.status(200).json({ message: 'Success.' })
        : res.status(401).json({ message: 'Passwords do not match.' })
    }
  } catch (error) {
    return res.status(500).json({ message: 'Error, please try again later.' })
  }
}

export default login
