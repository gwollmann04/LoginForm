import { GetServerSideProps } from 'next'

export { default } from '@/components/UserAuth/AccountRecovery'

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {},
  }
}