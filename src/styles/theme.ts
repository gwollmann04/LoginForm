import { extendTheme } from '@chakra-ui/react'

import { textStyles } from './components/textStyles'
import { buttonStyles } from './components/buttonStyles'

const theme = extendTheme({
  fonts: {
    body: `'Roboto', sans-serif`
  },
  styles: {
    global: {
      body: {
        minHeight: '100vh',
        height: '100%',
        width: '100%',
        direction: 'column',
        background: 'linear-gradient(-45deg, #2E2E2D, #3C3C3C, #5A5A5A, #5A5A5A)',
        color: '#E2E8F0',
        whiteSpace: 'pre-line',
        textAlign: 'justify',
        'input:-webkit-autofill': {
          WebkitTextFillColor: '#E2E8F0',
          WebkitBoxShadow: '0 0 0px 1000px none inset',
          transition: 'background-color 5000s ease-in-out 0s'
        },
        'input:-webkit-autofill:hover': {
          WebkitTextFillColor: '#E2E8F0',
          WebkitBoxShadow: '0 0 0px 1000px none inset',
          transition: 'background-color 5000s ease-in-out 0s'
        },
        'input:-webkit-autofill:focus': {
          WebkitTextFillColor: '#E2E8F0',
          WebkitBoxShadow: '0 0 0px 1000px none inset',
          transition: 'background-color 5000s ease-in-out 0s'
        },
        'input:-webkit-autofill:active': {
          WebkitTextFillColor: '#E2E8F0',
          WebkitBoxShadow: '0 0 0px 1000px none inset',
          transition: 'background-color 5000s ease-in-out 0s'
        }
      }
    }
  },
  components: {
    Text: textStyles,
    Button: buttonStyles
  }
})

export default theme
