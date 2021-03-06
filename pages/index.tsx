import type { NextPage } from 'next'
import Head from 'next/head'
import CardProfile from '../components/CardProfile'
import Intro from '../components/Intro'
import ThemeSwitcher from '../components/ThemeSwitcher'
import Warpper from '../components/Warpper'

const Home: NextPage = () => {
  return (
    <div className="app m-0 p-0 dark:bg-gray-800 bg-white">
      <Head>
        <title>Thanonphat Space 🚀</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="h-full w-full">
        <div className="text-center pt-4">
          <ThemeSwitcher />
        </div>
        <div className="w-full flex flex-col justify-center items-center gap-8">
          <div className="mt-8 flex container px-40">
            <div className="flex-1">
              <Intro />
            </div>
            <div className="flex-1">
              <CardProfile />
            </div>
          </div>
          <div></div>
        </div>
      </main>
    </div>
  )
}

export default Home
