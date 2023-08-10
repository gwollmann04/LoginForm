export const buttonStyles = {
  variants: {
    primary: {
      padding: '6px 12px',
      background: '#2E2E2D',
      border: '4px solid #2E2E2D',
      borderRadius: '20px',
      _hover: {
        background: '#E2E8F0',
        color: '#2E2E2D'
      }
    },
    secondary: {
      background:
        'linear-gradient(0deg, #E2E8F0, #E2E8F0) no-repeat right bottom / 0 2px',
      transition: 'background-size 350ms',
      fontWeight: 'normal',
      px: '0px',
      fontSize: '14px',
      _hover: {
        color: 'none',
        backgroundSize: '100% 2px',
        backgroundPositionX: 'left'
      },
      _active: { color: 'none' },
      color: '#E2E8F0'
    },
    link: {
      px: '0px',
      color: '#E2E8F0',
      pb: '5px',
      fontWeight: 'normal',
      fontSize: '24px',
      background: 'none',
      textDecoration: 'underline',
      _hover: { background: 'none' }
    }
  }
}
