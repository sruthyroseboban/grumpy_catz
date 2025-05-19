import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { MainStyle } from "./MainStyle";
import Image from "next/image";
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import Nav from "components/Nav";
import Timee from "components/timer";
import Link from "next/link";

const Main = () => {
  const [show, setShow] = useState(false);
  const [check, setCheck] = useState(false);
  console.log(Date.now())
  const handleClose = () => setShow(false);

  const MINUTE_MS = 25000;
  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, MINUTE_MS);
  }, []);

  return (
    <>
      <MainStyle>
      
        <div className="nav">

          <h3 className="text-black  p-topbar pt-1">PRESALE MINTING IS NOW LIVE</h3>

          {/* at 12 pm */}
          {/* <Timee/> */}

        </div>
        <Nav />
        <div id="home">

          <a href="#about">
            <picture className="scroller">
              <img src="./images/Scroller.webp" alt="grumpy-hero" />
            </picture>
          </a>
          <picture className="smoke">
            <img src="./images/smoke.webp" alt="grumpy-hero" />
            <img src="./images/smoke.webp" alt="grumpy-hero" />
            <img src="./images/smoke.webp" alt="grumpy-hero" />
          </picture>
        </div>
      </MainStyle>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>



          <div className="row">
            <div className="col-xl-6 d-none d-xl-block">
              <picture>

                <img src="./images/popup-banner.png" alt="" />
              </picture>

            </div>
            <div className="col-xl-6 p-5 align-self-center">

              <h2 className="display-1">
                <span className="l-h">PRESALE MINTING
                  <br />
                  IS NOW LIVE</span>
              </h2>
              <p>
                Grumpycatz NFT is going to be an internet sensation. Take advantage of this excellent opportunity to own it at a lower price before the public sale on Opensea. Don&apos;t miss out!
              </p>


              <div className="d-flex justify-content-center mt-4 justify-content-lg-start">

                <Link href="/mint">
                  <button className="btn btn-primary mt-3 px-5 py-2">
                    mint now
                  </button>
                </Link>

              </div>
            </div>
          </div>

          {/* at 12 pm */}
          {/* <div className="row">
            <div className="col-xl-6 d-none d-xl-block">
                     <picture>

            <img src="./images/popup-banner.png" alt="" />
            </picture>

            </div>
            <div className="col-xl-6 p-4 align-self-center">

              <h2 className="display-1">
                <span className="l-h">PRESALE <br />
                MINTING EXTENDED</span>
              </h2>
              <p>
                In Grumpycatz&apos;s infinite wisdom, we&apos;ve decided to extend our presale minting, ensuring all his potential followers learn about his propaganda and join the fellowship of nope.
              </p>


              <div className="d-flex justify-content-center mt-4 justify-content-lg-start">
  <Link href="/mint">
                  <button className="btn btn-primary mt-3 px-5 py-2">
                        mint now
                  </button>
                  </Link>
              </div>
            </div>
          </div> */}


          {/* 11 pm  tomorrow*/}
          {/* <div className="row">
            <div className="col-xl-6 d-none d-xl-block">
                   <picture>

            <img src="./images/popup-banner.png" alt="" />
            </picture>

            </div>
            <div className="col-xl-6 p-5 align-self-center">

              <h2 className="display-1">
                <span className="l-h">GRUMPYCATZ NFT
                  <br />
                  PUBLIC SALE</span>
              </h2>
              <p>
                Check out the Grumpycatz NFT entire collection on open-sea and find out everything you need to know about our NFT&apos;s rarity, utilities, traits & prices. What are you waiting for?              </p>


              <div className="d-flex justify-content-center mt-4 justify-content-lg-start">
  <Link href="/mint">
                  <button className="btn btn-primary mt-3 px-5 py-2">
                        mint now
                  </button>
                  </Link>
              </div>
            </div>
          </div> */}
        </Modal.Body>
      </Modal>
    </>
  );
};
export default Main;