import { NextApiRequest, NextApiResponse } from 'next'

import { extractFileData, buildFilePath } from '@/helpers/apiHandlers'

const signup = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req?.method === 'POST') {
      const userData = req?.body

      // Get all data from json file
      const filePath = buildFilePath('users')
      const data = extractFileData(filePath)

      const userName = data.find(
        (user: any) =>
          user.email === userData?.email
      )
      if (!userName)
        return res.status(404).json({ message: 'User not found.' })

      res.status(200).json({ message: 'Success' })
    }
  } catch (error) {
    return res.status(500).json({ message: 'Error, please try again later.' })
  }
}

export default signup
