import React, { SetStateAction, useEffect, useState } from "react";
import Nav from "components/Nav";
import { MainStyle } from "views/mint/MainStyle";
import { useAccount } from "wagmi";
import { contracts } from "config/constants";
import { useContractRead } from "wagmi";
import { NextPage } from "next";
import { Carousel } from "react-bootstrap";

const AccountAsset: NextPage = () => {
  const { isConnected, address } = useAccount();
  const [count, setCount] = useState(0);
  const [IMG, setImg] = useState([] as any);
  const opensea_testnet = process.env.NEXT_PUBLIC_GRUMPY_TESTNET_OPENSEA;
  const baseUri = "QmXAW99sB6SNpo8WVzb2xcHvwAdT4ZPeWm5CsyBd6A9cdK";
  const imageArray: { imageURI: string; token_Id: any }[] = [];
  const { data } = useContractRead(
    address
      ? {
          address: contracts.GrumpyCatNFTContract.address,
          abi: contracts.GrumpyCatNFTContract.abi,
          functionName: "walletOfOwner",
          args: [address],
          onSuccess(dt: any) {
            setCount(dt.length);
            getImages(dt);
          },
        }
      : {}
  );

  const getImages = async (tokenData: any) => {
    for (let i = 0; i < tokenData?.length; i++) {
      const response = await fetch(
        `https://nftstorage.link/ipfs/${baseUri}/${Number(tokenData[i])}.json`
      );

      if (!response.ok) {
        const imageURI = "../images/meme-loading.gif";
        const imageData = {
          imageURI: imageURI,
          token_Id: tokenData[i],
        };
        imageArray.push(imageData);
      } else {
        const json = await response.json();
        const imageUrl = json.image;
        const imageUrlnew = imageUrl.replace("ipfs://", "ipfs/");
        const imageURI = `https://nftstorage.link/${imageUrlnew}`; //https://ipfs.io/
        // console.log(imageURI)
        const imageData = {
          imageURI: imageURI,
          token_Id: tokenData[i],
        };
        imageArray.push(imageData);
      }
    }
    setImg(imageArray);
  };

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: SetStateAction<number>, e: any) => {
    setIndex(selectedIndex);
  };
  return (
    <MainStyle>
      <Nav />
      <div className="container">
        <div className="d-flex flex-column justify-content-center align-items-center">
          <h2 className="text-center">
            YOU HAVE <span> SUCCESSFULLY</span>
            <br />
            MINTED <span>{count}</span> GRUMPY CATZ NFT
          </h2>
        </div>
        <div className="d-flex cat-carousel justify-content-center mt-5">
          <div className="border-1">
            <div className="border-2 w-100">
              <Carousel
                interval={null}
                activeIndex={index}
                onSelect={handleSelect}
              >
                {IMG.length > 0 && isConnected ? (
                  IMG.map((data: any, i: any) => (
                    <Carousel.Item key={i}>
                      <picture>
                        <img
                          src={
                            data.imageURI
                              ? data.imageURI
                              : "../images/meme-loading.gif"
                          }
                          alt="gc-mint"
                        />
                      </picture>
                    </Carousel.Item>
                  ))
                ) : (
                  <Carousel.Item>
                    <picture>
                      <img src="./images/catloader.gif" alt="gc-mint.gif" />
                    </picture>
                  </Carousel.Item>
                )}
                    
              </Carousel>
              <span>GRUMPY CATZ NFT</span>
              <span>GRUMPY CATZ NFT</span>
              <span>GRUMPY CATZ NFT</span>
              <span>GRUMPY CATZ NFT</span>
            </div>
          </div>
        </div>
        <div className="d-flex flex-column align-items-center justify-content-center mt-5">
          <p>
            <span className="text-muted"> Name: </span>{" "}
            <span className="text-white">
              grumpycatz #
              {IMG.length > index && IMG.length > 0
                ? Number(IMG[index].token_Id)
                : "0000"}
            </span>
          </p>
          <p>
            <span className="text-muted"> Address: </span>{" "}
            <a
              href={`https://etherscan.io/token/${contracts.GrumpyCatNFTContract.address}?a=${IMG.token_Id}#inventory`}
              target="_blank"
              rel="noreferrer"
            >
              <span>{address}</span>
            </a>
          </p>
          <p>
            <span className="text-muted"> Open Sea: </span>
            {IMG.length > index && IMG.length > 0 ? (
              <a
                href={`${opensea_testnet}/${Number(IMG[index].token_Id)}`}
                target="_blank"
                rel="noreferrer"
              >
                <span>
                  {" "}
                  https://opensea.com/grumpycatz/{Number(IMG[index].token_Id)}
                </span>
              </a>
            ) : (
              <a href={``}>
                <span>https://opensea.com/grumpycatz/0000 </span>
              </a>
            )}
          </p>
        </div>
      </div>
    </MainStyle>
  );
};
export default AccountAsset;
