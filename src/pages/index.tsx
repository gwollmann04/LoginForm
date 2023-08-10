import { GetServerSideProps } from 'next'

export { default } from '@/components/UserAuth/LogIn'

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      permanent: true,
      destination: "/login"
    },
  }
}