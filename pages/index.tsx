import type { NextPage } from 'next'
import Main from '../views/grumpyCatz/main'
import CatBox from '../views/grumpyCatz/catBox'
import SocialMining from '../views/grumpyCatz/socialMining'
import GrumpySection from '../views/grumpyCatz/grumpySection'
import Collection from '../views/grumpyCatz/collection'
import DonationSection from '../views/grumpyCatz/donationSection'
import Faq from '../views/grumpyCatz/faq'
import Footer from '../views/grumpyCatz/footer'
import Team from '../views/grumpyCatz/team'
import { useEffect, useRef, useState } from "react";

import Head from 'next/head'
import Podium from '../views/grumpyCatz/podium'

const Home: NextPage = () => {
  const [playAnimation, setPlayAnimation] = useState(false);
  const [fade, setFade] = useState(false);

  const myRef: any = useRef(null)
  const myRef2: any = useRef(null)
  const myRef3: any = useRef(null)
  const myRef4: any = useRef(null)
  const [moveCat, setMoveCat] = useState(0)
  const [moveCat2, setMoveCat2] = useState(0)
  const [moveCat3, setMoveCat3] = useState(0)
  const [moveCat4, setMoveCat4] = useState(0)

  useEffect(() => {
    const handleScroll = (_event: any) => {

      const stopScroll = 1700;

      window.scrollY < stopScroll && setMoveCat(window.scrollY);
      myRef2.current.offsetTop < 1800 ? setMoveCat2(window.scrollY) : ''

      myRef3.current.offsetTop < 1800 ? setMoveCat3(window.scrollY) : ''

      myRef4.current.offsetTop < 1800 ? setMoveCat4(window.scrollY) : ''

    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [moveCat, myRef]);


  useEffect(() => {
    const onPageLoad = () => {
      setFade(true);
        setPlayAnimation(true);
    };
    if (document.readyState === 'complete') {
      onPageLoad();
    } else {
      window.addEventListener('load', onPageLoad);
      return () => window.removeEventListener('load', onPageLoad);
    }
  }, []);

  return (
    <>
      {
        playAnimation
          ?
          <>
            <Head>
              <title>Grumpy Catz NFT - The Fellowship Of Nope</title>
            </Head>
            <Main />
            <GrumpySection myRef={myRef} moveCat={moveCat} />
            <CatBox />
            <Collection myRef2={myRef2} myRef3={myRef3} myRef4={myRef4} moveCat2={moveCat2} moveCat3={moveCat3} moveCat4={moveCat4} />
            <SocialMining />
            <DonationSection />
            <Podium />
            <Team />
            <Faq />
            <Footer />
          </>
          :
          <section className='load'>
          </section>
      }
    </>
  )
}

export default Home