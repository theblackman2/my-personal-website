import Head from 'next/head'
import { Inter } from '@next/font/google'
import NavBar from '@/components/NavBar'
import Resume from '@/components/Resume'
import { useState, useEffect } from 'react';
import { windowSize } from '@/utils/types';
import Services from '@/components/Services';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [showLinks, setShowLinks] = useState<boolean>(false);
  const [windowSize, setWindowSize] = useState<windowSize>()

  const trackScreenSizeChange = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight
    })
  }

  useEffect(() => {
    window.addEventListener("resize", trackScreenSizeChange)

    return () => window.removeEventListener("resize", trackScreenSizeChange)
  }, [])

  return (
    <>
      <Head>
        <title>Pascal Kasonga</title>
        <meta name="description" content="Hello! I'm Pascal Kasonga, an enthusiastic Congolese web and mobile developer. I like big challenges and learning new things, I'm always open to collaboration as a freelancer." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar showLinks={showLinks} setShowLinks={setShowLinks} />
      <div className="body-content">
        <div className="container">
          <Resume showLinks={showLinks} screenWidth={windowSize?.width ?? 0} />
          <Services />
        </div>
      </div>
    </>
  )
}
