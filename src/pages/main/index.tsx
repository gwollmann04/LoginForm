import { GetServerSideProps } from 'next'

export { default } from '@/components/MainPage/MainPage'

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {},
  }
}