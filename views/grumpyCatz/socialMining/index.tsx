import { SocialMiningStyle } from "./SocialMiningStyle"

const SocialMining = () => {
  return (
    <SocialMiningStyle>
      <div id="utilities" className="container">
        <div className="row">
          <div className="col-lg-6 order-2 order-lg-1">
            <picture>
              <img src="./images/propaganda_machine.webp" alt="propaganda_machine" />
            </picture>
          </div>
          <div className="col-lg-6 order-1 align-self-center">
            <h6>
              <span>the propaganda machine</span>
            </h6>

            <h2 className="display-3 mt-3">
              spread the regime through <br />
              your meme & <span> be rewarded </span>
            </h2>
            <p>
            Missionary of Nope; it is time to spread our new regime using ancient Grumpy Cat techniques. Through the power of MEMES and social media.
             <br />
             Soon, you will be able to add a custom meme to your NFT, making it even rarer and more desirable. Every time your MEME gets shared online, we will reward you with &quot;NOPE COIN,&quot; the regime&apos;s new world currency. 10% of all sales will go into the token&apos;s liquidity pool, which will be listed on Uniswap. Creators will also compete for weekly bonuses and giveaways.
            </p>
         
          </div>
        </div>
        <div className="row">
          <div className="col-6 p-3 col-sm-3">
          <picture>
              <img src="./images/1.webp" alt="1" />
            </picture>
          </div>
          <div className="col-6 p-3 col-sm-3">
          <picture>
              <img src="./images/2.webp" alt="2" />
            </picture>
           </div>
           <div className="col-6 p-3 col-sm-3">
           <picture>
              <img src="./images/3.webp" alt="3" />
            </picture>
           </div>
           <div className="col-6 p-3 col-sm-3">
           <picture>
              <img src="./images/4.webp" alt="4" />
            </picture>
           </div>
        </div>
      </div>
    </SocialMiningStyle>
  )
}
export default SocialMining