import { FootStyle } from "./FootStyle";

const Footer = () => {
  return (
    <FootStyle className="foot">
      <div id="followus" className="container">
        <div className="d-flex flex-column align-items-center justift-content-center">
          <h3 className="text-center">
            <span>FOLLOW US </span>OR DON&apos;T<span>, </span> <br />{" "}
            <span> WE COULDNT CARE LESS.</span>{" "}
          </h3>
          <div className="d-flex mt-3">
            <a
              target="_blank"
              href="https://twitter.com/Grumpycatznftz"
              rel="noreferrer"
            >
              <i className="bi m-0 bi-twitter"></i>
            </a>
            <a
              target="_blank"
              href="https://discord.com/invite/grumpy-catz"
              rel="noreferrer"
            >
              <i className="bi bi-discord"></i>
            </a>
            <a
              target="_blank"
              href="mailto: grumpycatznftclub@gmail.com"
              rel="noreferrer"
            >
              <i className="bi bi-envelope"></i>
            </a>
          </div>
        </div>
      </div>
      <hr />
      <div className="d-flex justify-content-center">
        <p className="copyright">
          <span> @2022 Grumpy Catz NFT Club | ALL RIGHT RESERVED</span>
        </p>
      </div>
    </FootStyle>
  );
};
export default Footer;
