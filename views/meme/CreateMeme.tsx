// import { Form } from "react-bootstrap";
// import { MainStyle } from "../mint/MainStyle";
// import React, { useEffect, useRef, useState } from "react";
// // import ExportNewNft from "lib/exportNewNft";
// // import UploadMetadata from "lib/UploadMetadata";
// // import ReplaceTokenURI from "lib/ReplaceTokenURI";
// // import MintCatImg from "lib/mintcatImg";
// import Link from "next/link";
// import { useAccount } from "wagmi";

const MemeCreate = () => {
  // const [IMG, setImg] = useState([] as any);
  // const [topText, setTopText] = useState("");
  // const [bottomText, setBottomText] = useState("");
  // const [image, setImage] = useState(null);
  // const [imageUrl, setImageUrl] = useState("./images/test.jpeg");
  // const [tokenId, setTokenId] = useState(null);
  // const catloading = "../images/catloading.gif";
  // const [catMeme, setCatMeme] = useState(catloading);
  // const [catMemeId, setCatmemeId] = useState(null);
  // const [incValue, setIncValue] = useState(0);
  // const goerli_testnet = process.env.NEXT_PUBLIC_GRUMPY_TESTNET_ETHERSCAN;
  // const opensea_testnet = process.env.NEXT_PUBLIC_GRUMPY_TESTNET_OPENSEA;
  // const { address } = useAccount();
  // const canvasRef = useRef(null);
  // const handleImage = (id: any, url: string) => {
  //   setImageUrl(url);
  //   setTokenId(id);
  //   const catImage = new Image();
  //   // catImage.crossOrigin = "Anonymous";
  //   catImage.crossOrigin = "anonymous";
  //   //@ts-ignore
  //   catImage.src = url;
  //   //@ts-ignore
  //   catImage.onload = () => setImage(catImage);
  // };

  // useEffect(() => {
  //   if (image && canvasRef) {
  //     //@ts-ignore
  //     const ctx = canvasRef.current.getContext("2d");
  //     ctx.fillStyle = "white";
  //     ctx.fillRect(0, 0, 700, 600 + 80);

  //     ctx.drawImage(image, 0, 40, 700, 600);

  //     ctx.font = "small-caps bold 30px arial";
  //     ctx.fillStyle = "black";
  //     ctx.textAlign = "center";

  //     ctx.fillText(topText, 700 / 2, 30);
  //     ctx.fillText(bottomText, 680 / 2, 600 + 40 + 25);
  //   }
  // }, [image, canvasRef, topText, bottomText]);

  // const handleSubmit = async (e: { preventDefault: () => void }) => {
  //   e.preventDefault();

  //   if (canvasRef) {
  //     //@ts-ignore
  //     const image = canvasRef.current.toDataURL("image/png", 1.0);
  //     const response = await fetch(image);
  //     const blob = await response.blob();
  //     await UploadMetadata(blob, tokenId, topText, bottomText).then(
  //       async (result) => {
  //         //@ts-ignore
  //         await ReplaceTokenURI(result, tokenId);
  //       }
  //     );
  //   }
  // };

  // useEffect(() => {
  //   // ExportNewNft(address).then((value) => {
  //   //   setImg(value);
  //   // });
  // }, []);
  return (
    <></>
    //   <MainStyle style={{ minHeight: "0px" }}>
    //     <div className="container ">
    //       <div className="d-flex flex-column justify-content-center align-items-center">
    //         <h2 className="text-center">
    //           ADD A <span> CUSTOM MEME</span>
    //         </h2>
    //         <h2 className="text-center">TO YOUR GRUMPY CATZ NFT</h2>
    //       </div>
    //       {image ? (
    //         <>
    //           <div className="col-xl-6" style={{ margin: "100px" }}>
    //             <canvas ref={canvasRef} width={700} height={600 + 80} />
    //           </div>
    //           <>
    //             <div className="row d-flex d-flex align-items-center justify-content-center">
    //               <div className="col-xl-10 order-2 order-lg-1 col-lg-6">
    //                 <div className="card-form">
    //                   <div className="d-flex flex-column">
    //                     <label style={{ fontFamily: "Roboto", fontSize: "20px" }}>
    //                       {" "}
    //                       Top Text
    //                     </label>
    //                     <input
    //                       className="py-2 px-3"
    //                       type="text"
    //                       style={{ fontFamily: "Roboto" }}
    //                       value={topText}
    //                       onChange={(e) => setTopText(e.target.value)}
    //                       autoFocus
    //                     />
    //                     <label style={{ fontFamily: "Roboto", fontSize: "20px" }}>
    //                       {" "}
    //                       Bottom Text
    //                     </label>
    //                     <input
    //                       className="py-2 px-3"
    //                       type="text"
    //                       style={{ fontFamily: "Roboto" }}
    //                       value={bottomText}
    //                       onChange={(e) => setBottomText(e.target.value)}
    //                       autoFocus
    //                     />
    //                   </div>
    //                   <div className="d-flex justify-content-center mt-3">
    //                     <button
    //                       className="btn btn-primary"
    //                       onClick={handleSubmit}
    //                     >
    //                       RE MINT NOW
    //                     </button>
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>
    //           </>
    //         </>
    //       ) : (
    //         <>
    //           <div className="d-flex arrow-slide flex-nowrap justify-content-center align-items-center">
    //             <svg
    //               onClick={() => {
    //                 incValue <= 0 ? setIncValue(0) : setIncValue(incValue - 1);
    //               }}
    //               width="25%"
    //               viewBox="0 0 100 100"
    //               fill="none"
    //               xmlns="http://www.w3.org/2000/svg"
    //             >
    //               <rect
    //                 x="0.5"
    //                 y="0.5"
    //                 width="98.15"
    //                 height="98.15"
    //                 rx="9.5"
    //                 fill="#202020"
    //                 stroke="#DDDCDE"
    //               />
    //               <path
    //                 d="M33.0746 47.9001L53.6236 28.7152C54.6143 27.7902 56.2214 27.7902 57.2121 28.7152L59.609 30.9532C60.5987 31.8772 60.5997 33.3737 59.6133 34.2997L43.3274 49.5753L59.6122 64.852C60.5997 65.7779 60.5976 67.2745 59.608 68.1985L57.211 70.4364C56.2203 71.3614 54.6132 71.3614 53.6225 70.4364L33.0746 51.2506C32.0839 50.3256 32.0839 48.8251 33.0746 47.9001Z"
    //                 fill="white"
    //               />
    //             </svg>
    //             <div className="row d-flex flex-column align-items-center justify-content-center">
    //               <div className="border-1 col-lg-6 col-9">
    //                 <div
    //                   onClick={() =>
    //                     handleImage(
    //                       IMG[incValue].token_Id,
    //                       IMG[incValue].imageURI
    //                     )
    //                   }
    //                   style={{
    //                     backgroundImage: `url(${
    //                       IMG.length > incValue && IMG.length > 0
    //                         ? IMG[incValue].imageURI
    //                         : "./images/catloader.gif"
    //                     })`,
    //                     cursor: "pointer",
    //                   }}
    //                   className="border-2"
    //                 >
    //                   <picture>
    //                     <img
    //                       src="./images/team mebers00-03.webp"
    //                       alt="gc-mint.gif"
    //                     />
    //                   </picture>
    //                   <span>GRUMPY CATZ NFT</span>
    //                   <span>GRUMPY CATZ NFT</span>
    //                   <span>GRUMPY CATZ NFT</span>
    //                   <span>GRUMPY CATZ NFT</span>
    //                 </div>
    //               </div>
    //               <div className="d-flex flex-column align-items-center justify-content-center mt-5">
    //                 <p>
    //                   <span className="text-muted"> Name: </span>{" "}
    //                   <span className="text-white">
    //                     grumpycatz #
    //                     {IMG.length > incValue && IMG.length > 0
    //                       ? Number(IMG[incValue].token_Id)
    //                       : "0000"}
    //                   </span>
    //                 </p>
    //                 {/* <p>
    //                           <span className='text-muted'>   Address: </span> <span>{address}</span>
    //                       </p> */}
    //                 <p>
    //                   <span className="text-muted"> Open Sea: </span>
    //                   {IMG.length > incValue && IMG.length > 0 ? (
    //                     <Link
    //                       href={`${opensea_testnet}/${Number(
    //                         IMG[incValue].token_Id
    //                       )}`}
    //                       target="_blank"
    //                     >
    //                       <span>
    //                         {" "}
    //                         https://opensea.com/grumpycatz/
    //                         {Number(IMG[incValue].token_Id)}
    //                       </span>
    //                     </Link>
    //                   ) : (
    //                     <Link href={``}>
    //                       <span>https://opensea.com/grumpycatz/0000 </span>
    //                     </Link>
    //                   )}
    //                 </p>
    //               </div>
    //             </div>
    //             <svg
    //               onClick={() => {
    //                 incValue >= IMG.length - 1
    //                   ? setIncValue(
    //                       IMG.length - 1 < 0 ? IMG.length : IMG.length - 1
    //                     )
    //                   : setIncValue(incValue + 1);
    //               }}
    //               width="25%"
    //               viewBox="0 0 100 99"
    //               fill="none"
    //               xmlns="http://www.w3.org/2000/svg"
    //             >
    //               <rect
    //                 x="98.6494"
    //                 y="98.5"
    //                 width="97.9995"
    //                 height="97.9995"
    //                 rx="9.5"
    //                 transform="rotate(-180 98.6494 98.5)"
    //                 fill="#202020"
    //                 stroke="#DDDCDE"
    //               />
    //               <path
    //                 d="M66.125 51.173L45.6072 70.3288C44.618 71.2524 43.0134 71.2524 42.0242 70.3288L39.6308 68.0943C38.6427 67.1717 38.6416 65.6774 39.6266 64.7528L55.8878 49.5003L39.6277 34.2469C38.6416 33.3223 38.6438 31.828 39.6319 30.9054L42.0252 28.6709C43.0144 27.7473 44.6191 27.7473 45.6083 28.6709L66.125 47.8276C67.1142 48.7512 67.1142 50.2495 66.125 51.173Z"
    //                 fill="white"
    //               />
    //             </svg>
    //           </div>
    //         </>
    //       )}
    //     </div>
    //   </MainStyle>
  );
};
export default MemeCreate;
