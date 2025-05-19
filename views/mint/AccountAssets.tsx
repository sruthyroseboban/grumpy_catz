import React, { SetStateAction, useState } from "react";
import { useAccount } from "wagmi";
import { contracts } from "config/constants";
import { useContractRead } from "wagmi";
import { Carousel } from "react-bootstrap";
import Image from "next/image";

export const AccountAssets = () => {
  const { isConnected, address } = useAccount();
  const [IMG, setImg] = useState([] as any);
  // const baseUri = "QmXAW99sB6SNpo8WVzb2xcHvwAdT4ZPeWm5CsyBd6A9cdK";
  const [ownedCount, setOwnedCount] = useState(0);
  const imageArray: { imageURI: string; token_Id: any }[] = [];
  const [index, setIndex] = useState(0);

  useContractRead({
    address: contracts.GrumpyCatNFTContract.address,
    abi: contracts.GrumpyCatNFTContract.abi,
    chainId: 1,
    functionName: "walletOfOwner",
    args: [address],
    onSuccess(dt: any) {
      setOwnedCount(dt.length);
      getImages(dt);
    },
  });

  const getImages = async (tokenData: any) => {
    for (let i = 0; i < tokenData?.length; i++) {
      const response = await fetch(
        `https://grumpycatz.club/api/metadata/${Number(tokenData[i])}`
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
        // const imageUrlnew = imageUrl.replace("ipfs://", "ipfs/");
        // const imageURI = `https://nftstorage.link/${imageUrlnew}`;
        const imageData = {
          imageURI: imageUrl,
          token_Id: tokenData[i],
        };
        imageArray.push(imageData);
      }
    }
    setImg(imageArray);
  };

  const handleSelect = (selectedIndex: SetStateAction<number>, e: any) => {
    setIndex(selectedIndex);
  };
  return (
    <div className="container">
      <div className="d-flex flex-column justify-content-center align-items-center">
        <h2 className="text-center">
          YOUR MINTED <span> GRUMPY CATZ NFT </span>
        </h2>
      </div>
      <div className="d-flex cat-carousel justify-content-center mt-5">
        {IMG.length > 0 && isConnected ? (
          <div className="border-1">
            <div className="border-2">
              <Carousel
                interval={null}
                activeIndex={index}
                onSelect={handleSelect}
              >
                {IMG.map((data: any, i: any) => (
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
                ))}
              </Carousel>
              <span>GRUMPY CATZ NFT</span>
              <span>GRUMPY CATZ NFT</span>
              <span>GRUMPY CATZ NFT</span>
              <span>GRUMPY CATZ NFT</span>
            </div>
          </div>
        ) : (
          <div className="col-xl-5 mb-3 order-1 col-lg-6">
            <Image
              src="/images/gc-mint.gif"
              alt="gc-mint.gif"
              title=""
              width="100%"
              height="100%"
              layout="responsive"
              objectFit="cover"
              loading="eager"
              priority
              placeholder="blur"
              blurDataURL="/images/reduced_gc.gif"
            />
          </div>
        )}
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
              href={`https://opensea.io/${
                contracts.GrumpyCatNFTContract.address
              }/${Number(IMG[index].token_Id)}`}
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
  );
};
