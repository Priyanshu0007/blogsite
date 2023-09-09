import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='container mx-auto px-10 mb-8'>
      <Head>
        <title>Kamlesh Ki Katha</title>
        <link rel='icon' href='/favicon.ico'></link>
      </Head>
    </div>
  )
}
