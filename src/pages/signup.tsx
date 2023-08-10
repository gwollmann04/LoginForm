import { GetServerSideProps } from 'next'

export { default } from '@/components/UserAuth/SignUp'

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {},
  }
}