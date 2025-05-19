// import ExportImgMinted from "lib/exportImgMinted";
import { SetStateAction, useEffect, useState } from "react";
import Link from "next/link";
import Carousel from "react-bootstrap/Carousel";
import { useAccount } from "wagmi";
// import FetchIPFSImg from "lib/fetchIPFSImg";
import { contracts } from "config/constants";
import { useContractRead } from "wagmi";

const Form = async (props: any) => {
  // const [IMG, setImg] = useState([] as any);
  // const goerli_testnet = process.env.NEXT_PUBLIC_GRUMPY_TESTNET_ETHERSCAN;
  // const opensea_testnet = process.env.NEXT_PUBLIC_GRUMPY_TESTNET_OPENSEA;
  // const { address } = useAccount();
  // const baseUri = "QmXAW99sB6SNpo8WVzb2xcHvwAdT4ZPeWm5CsyBd6A9cdK";
  // const imageArray: { imageURI: string; token_Id: any }[] = [];
  // const { data } = useContractRead(
  //   address
  //     ? {
  //         address: contracts.GrumpyCatNFTContract.address,
  //         abi: contracts.GrumpyCatNFTContract.abi,
  //         functionName: "walletOfOwner",
  //         args: [address],
  //       }
  //     : {}
  // );
  // for (let i = 0; i < data.length; i++) {
  //   const response = await fetch(
  //     `https://nftstorage.link/ipfs/${baseUri}/${data[i]}`
  //   );
  //   if (!response.ok) throw new Error(response.statusText);
  //   const json = await response.json();
  //   const imageUrl = json.image;
  //   const imageUrlnew = imageUrl.replace("ipfs://", "ipfs/");
  //   const imageURI = `https://ipfs.io/${imageUrlnew}`; //https://ipfs.io/
  //   // console.log(imageURI)
  //   const imageData = {
  //     imageURI: imageURI,
  //     token_Id: data[i],
  //   };
  //   imageArray.push(imageData);
  // }
  // useEffect(() => {
  //   setImg(imageArray);
  //   console.log(imageArray);
  // }, [address]);
  // const [index, setIndex] = useState(0);
  // const handleSelect = (selectedIndex: SetStateAction<number>, e: any) => {
  //   setIndex(selectedIndex);
  // };
  // return (
  //   <>
  //     <div className="d-flex flex-column justify-content-center align-items-center">
  //       <h2 className="text-center">
  //         YOU HAVE <span> SUCCESSFULLY</span>
  //         <br />
  //         MINTED <span>{props.NftNo.length}</span> GRUMPY CATZ NFT
  //       </h2>
  //     </div>
  //     <div className="d-flex cat-carousel justify-content-center mt-5">
  //       <div className="border-1">
  //         <div className="border-2">
  //           <Carousel
  //             interval={null}
  //             activeIndex={index}
  //             onSelect={handleSelect}
  //           >
  //             {IMG.imageURI ? (
  //               IMG.map((data: any, i: any) => (
  //                 <Carousel.Item key={i}>
  //                   <picture>
  //                     <img src={data.imageURI} alt="gc-mint" />
  //                   </picture>
  //                 </Carousel.Item>
  //               ))
  //             ) : (
  //               <Carousel.Item>
  //                 <picture>
  //                   <img src="./images/catloader.gif" alt="gc-mint.gif" />
  //                 </picture>
  //               </Carousel.Item>
  //             )}
  //           </Carousel>
  //           <span>GRUMPY CATZ NFT</span>
  //           <span>GRUMPY CATZ NFT</span>
  //           <span>GRUMPY CATZ NFT</span>
  //           <span>GRUMPY CATZ NFT</span>
  //         </div>
  //       </div>
  //     </div>
  //     <div className="d-flex flex-column align-items-center justify-content-center mt-5">
  //       <p>
  //         <span className="text-muted"> Name: </span>{" "}
  //         <span className="text-white">
  //           grumpycatz #
  //           {IMG.length > index && IMG.length > 0
  //             ? Number(IMG[index].token_Id)
  //             : "0000"}
  //         </span>
  //       </p>
  //       <p>
  //         <span className="text-muted"> Address: </span>{" "}
  //         <Link href={`${goerli_testnet}/${props.Hash}`} target="_blank">
  //           <span>{address}</span>
  //         </Link>
  //       </p>
  //       <p>
  //         <span className="text-muted"> Open Sea: </span>
  //         {IMG.length > index && IMG.length > 0 ? (
  //           <Link
  //             href={`${opensea_testnet}/${Number(IMG[index].token_Id)}`}
  //             target="_blank"
  //           >
  //             <span>
  //               {" "}
  //               https://opensea.com/grumpycatz/{Number(IMG[index].token_Id)}
  //             </span>
  //           </Link>
  //         ) : (
  //           <Link href={``}>
  //             <span>https://opensea.com/grumpycatz/0000 </span>
  //           </Link>
  //         )}
  //       </p>
  //     </div>
  //   </>
  // );
};

export default Form;
