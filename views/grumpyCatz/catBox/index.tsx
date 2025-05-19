import { CatBoxStyle } from "./CatBox";

const CatBox = () => {
  return (
    <CatBoxStyle>
      <div id="whitelist" className="container">
        <div className="d-flex">
        </div>
        <div className="row">
          <div className="col-lg-6">
            <picture>
              <img src="./images/whitelist_cat.webp" alt="presale-img" />
            </picture>
          </div>
          <div className="col-lg-6 align-self-center">
            <h6>
              <span>the whitelist society</span>
            </h6>
            <h2 className="display-3">
              <span>   EARLY PRESALE </span>MINTING & <br />
              A CHANCE <span> TO WIN FREE NFTS </span>

            </h2>
            <p>
              Now is the time to pledge your loyalty to The Fellowship of Nope. Members get exclusivity on presale minting at a discounted price.
              Whitelist spots are limited. Hurry!
              <br />
              <br />
              We are also giving away FREE NFT Mint to 5 of our disciples. Winners will be announced on November 1st.
            </p>

            <div className="d-flex justify-content-center mt-3 justify-content-lg-start">
              <a rel="noreferrer" target="_blank" href="https://mintparty.xyz/grumpycatznftclub-1665386480935/whitelist-1665386502956">
                <button className="btn btn-primary px-5 py-2">
                  JOIN WHITELIST SOCIETY
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <picture className="smoke">
        <img src="./images/smoke.webp" alt="grumpy-hero" />
        <img src="./images/smoke.webp" alt="grumpy-hero" />
        <img src="./images/smoke.webp" alt="grumpy-hero" />
      </picture>
    </CatBoxStyle>
  );
};
export default CatBox;
