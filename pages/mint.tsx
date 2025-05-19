import { NextPage } from "next"
import dynamic from "next/dynamic"
import Head from "next/head"
const Main = dynamic(
  () => import('views/mint'),
  { ssr: false }
)
 
const Mint: NextPage = () => {
  return (
 <>
    <Head>
    <title>Grumpy Catz NFT - The Fellowship Of Nope</title>
     </Head>
    <Main />
 </>
  )
}
export default Mint
