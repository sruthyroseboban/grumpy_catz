import Accordion from "react-bootstrap/Accordion";
import { FaqStyle } from "./FaqStyle";

const Faq = () => {
  return (
    <FaqStyle>
      <div id="faq" className="container">
        <div className="row">
          <div className="col-lg-4  align-self-center">
            <picture className="d-flex mb-4 justify-content-center">
              <img
                className="align-self-start"
                src="./images/faq-img.webp"
                alt="faq-img"
              />
            </picture>
          </div>
          <div className=" col-lg-4">
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>How do i get on the Whitelist?</Accordion.Header>
                <Accordion.Body>
                  Click <a href="https://mintparty.xyz/grumpycatznftclub-1665386480935/whitelist-1665386502956">here </a>and follow the instructions indicated on the page to join the whitelist successfully, and stand a chance to win a free Grumpy Catz NFT Mint.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Where and when can we mint?</Accordion.Header>
                <Accordion.Body>
                  Minting will be done on our website to give users a chance to get a unique nft at a low price after which it will be available on Opensea.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>What&apos;s the Mint price?</Accordion.Header>
                <Accordion.Body>
                  The public MINT price will be 0.11 ETH. Whitelist MINT price is 0.09 ETH.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  How many Grumpy Catz NFTs are available?
                </Accordion.Header>
                <Accordion.Body>
                  There will be a total of 10,000 Grumpy Catz NFT available on the Ethereum
                  blockchain.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  Is there a recommended wallet for the Grumpy Catz NFT?
                </Accordion.Header>
                <Accordion.Body>
                  We recommend the Metamask wallet.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>

          </div>
          <div className="col-lg-4">
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  What Blockchain is the Grumpy Catz NFT on?
                </Accordion.Header>
                <Accordion.Body>ERC-20 (ETH) Blockchain.</Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  How and when can I add a meme to my Grumpy Catz NFT?
                </Accordion.Header>
                <Accordion.Body>
                  You will be able to customize your NFT on our website, once we sell out 50% of the collection.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>

            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>When can I get Grumpy coinz?</Accordion.Header>
                <Accordion.Body>
                  You can earn NOP Coins on every share of your NFT. 1 Share
                  = 1 Grumpy Coinz.You will be able to check your position on the leaderboard on our website once we sell out 50% of the collection.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  How much are you going to donate?
                </Accordion.Header>
                <Accordion.Body>
                  100% of all our merch store sales will be donated.{" "}
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Where can I contact you?</Accordion.Header>
                <Accordion.Body>
                  Join our community on Twitter, Discord, Instgram or drop us Email{" "}
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <div />
          </div>
        </div>
      </div>
    </FaqStyle>
  );
};
export default Faq;
