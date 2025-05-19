// import React, { useEffect, useState } from "react";
// import {
//   useSession,
//   signIn,
//   signOut,
//   getSession,
//   GetSessionParams,
// } from "next-auth/react";
// import ExportMemeImage from "../../lib/exportMemeImage";
// import Nav from "components/Nav";
// import { toast } from "react-toastify";
// import { MainStyle } from "views/mint/MainStyle";
// import { useAccount } from "wagmi";
const ViewMeme = () => {
  //   const { data: session, status } = useSession();
  //   const [AllIMG, setAllImg] = useState([] as any);
  //   const [incValue, setIncValue] = useState(0);
  //   const catloading = "../images/catloading.gif";
  //   const [catMeme, setCatMeme] = useState(catloading);
  //   const [shareLoading, setShareLoading] = useState(false);
  //   const { isConnected, address } = useAccount();
  //   useEffect(() => {
  //     // const MemeUrl = localStorage.getItem('MemeUrl');
  //     // if (MemeUrl != null && MemeUrl != catloading) {
  //     //   setCatMeme(MemeUrl)
  //     // }
  //     if (isConnected && address) {
  //       ExportMemeImage().then((value: any) => {
  //         setAllImg(value);
  //       });
  //     }
  //   }, [session, address, isConnected]);
  //   const handleImage = (id: any, url: string) => {
  //     setCatMeme(url);
  //     // localStorage.setItem('MemeUrl', url);
  //   };
  //   const tweetText = encodeURIComponent(
  //     "GRUMPY KATZ NFT is live Now\n\n See What I have got !!!"
  //   );
  //   const fbshareHref = `https://www.facebook.com/sharer.php?u=${catMeme}?imageurl=${catMeme}`;
  //   const handleMeme = async (e: { preventDefault: () => void }) => {
  //     e.preventDefault();
  //     // window.open(twitterShareHref, "_blank");
  //     if (session) {
  //       setShareLoading(true);
  //       let response = await fetch("/api/twitterapi", {
  //         method: "POST",
  //         body: JSON.stringify({ catMeme }),
  //       });
  //       let data = await response.json();
  //       // console.log(data);
  //       if (data.success == true) {
  //         toast.dark(`Successfully Shared`, {
  //           hideProgressBar: true,
  //           autoClose: 2000,
  //           type: "success",
  //           position: "bottom-left",
  //         });
  //       } else {
  //         toast.dark(`Not Shared !! Please Go Back and Try Again`, {
  //           hideProgressBar: true,
  //           autoClose: 2000,
  //           type: "error",
  //           position: "bottom-left",
  //         });
  //       }
  //       setTimeout(signOut, 4000);
  //       setShareLoading(false);
  //       // localStorage.setItem('MemeUrl', catloading);
  //     } else {
  //       signIn();
  //     }
  //   };
  //   const redirect = () => {
  //     signOut();
  //     window.location.replace("/ViewMeme");
  //     setCatMeme(catloading);
  //     // localStorage.setItem('MemeUrl', catloading);
  //   };
  //   return (
  //     <>
  //       <MainStyle>
  //       
  //           <Nav />
  //           <div className="container">
  //             {catMeme == catloading ? (
  //               <>
  //                 <div className="d-flex arrow-slide flex-nowrap justify-content-center align-items-center">
  //                   <svg
  //                     onClick={() => {
  //                       incValue <= 0
  //                         ? setIncValue(0)
  //                         : setIncValue(incValue - 1);
  //                     }}
  //                     width="25%"
  //                     viewBox="0 0 100 100"
  //                     fill="none"
  //                     xmlns="http://www.w3.org/2000/svg"
  //                   >
  //                     <rect
  //                       x="0.5"
  //                       y="0.5"
  //                       width="98.15"
  //                       height="98.15"
  //                       rx="9.5"
  //                       fill="#202020"
  //                       stroke="#DDDCDE"
  //                     />
  //                     <path
  //                       d="M33.0746 47.9001L53.6236 28.7152C54.6143 27.7902 56.2214 27.7902 57.2121 28.7152L59.609 30.9532C60.5987 31.8772 60.5997 33.3737 59.6133 34.2997L43.3274 49.5753L59.6122 64.852C60.5997 65.7779 60.5976 67.2745 59.608 68.1985L57.211 70.4364C56.2203 71.3614 54.6132 71.3614 53.6225 70.4364L33.0746 51.2506C32.0839 50.3256 32.0839 48.8251 33.0746 47.9001Z"
  //                       fill="white"
  //                     />
  //                   </svg>
  //                   <div className="row d-flex flex-column align-items-center justify-content-center">
  //                     <div className="border-1 col-lg-6 col-9">
  //                       {AllIMG?.length > incValue && AllIMG?.length > 0 ? (
  //                         <div
  //                           onClick={() =>
  //                             handleImage(
  //                               AllIMG[incValue].token_Id,
  //                               AllIMG[incValue].imageURI
  //                             )
  //                           }
  //                           style={{
  //                             backgroundImage: `url(${AllIMG[incValue].imageURI})`,
  //                             cursor: "pointer",
  //                           }}
  //                           className="border-2"
  //                         >
  //                           <picture>
  //                             <img
  //                               src="./images/team mebers00-03.webp"
  //                               alt="gc-mint.gif"
  //                             />
  //                           </picture>
  //                           <span>GRUMPY CATZ NFT</span>
  //                           <span>GRUMPY CATZ NFT</span>
  //                           <span>GRUMPY CATZ NFT</span>
  //                           <span>GRUMPY CATZ NFT</span>
  //                         </div>
  //                       ) : (
  //                         <div
  //                           style={{
  //                             backgroundImage: `url('./images/loading.gif')`,
  //                             cursor: "pointer",
  //                           }}
  //                           className="border-2"
  //                         >
  //                           <picture>
  //                             <img
  //                               src="./images/team mebers00-03.webp"
  //                               alt="gc-mint.gif"
  //                             />
  //                           </picture>
  //                           <span>GRUMPY CATZ NFT</span>
  //                           <span>GRUMPY CATZ NFT</span>
  //                           <span>GRUMPY CATZ NFT</span>
  //                           <span>GRUMPY CATZ NFT</span>
  //                         </div>
  //                       )}
  //                     </div>
  //                   </div>
  //                   <svg
  //                     onClick={() => {
  //                       incValue >= AllIMG.length - 1
  //                         ? setIncValue(
  //                             AllIMG.length - 1 < 0
  //                               ? AllIMG.length
  //                               : AllIMG.length - 1
  //                           )
  //                         : setIncValue(incValue + 1);
  //                     }}
  //                     width="25%"
  //                     viewBox="0 0 100 99"
  //                     fill="none"
  //                     xmlns="http://www.w3.org/2000/svg"
  //                   >
  //                     <rect
  //                       x="98.6494"
  //                       y="98.5"
  //                       width="97.9995"
  //                       height="97.9995"
  //                       rx="9.5"
  //                       transform="rotate(-180 98.6494 98.5)"
  //                       fill="#202020"
  //                       stroke="#DDDCDE"
  //                     />
  //                     <path
  //                       d="M66.125 51.173L45.6072 70.3288C44.618 71.2524 43.0134 71.2524 42.0242 70.3288L39.6308 68.0943C38.6427 67.1717 38.6416 65.6774 39.6266 64.7528L55.8878 49.5003L39.6277 34.2469C38.6416 33.3223 38.6438 31.828 39.6319 30.9054L42.0252 28.6709C43.0144 27.7473 44.6191 27.7473 45.6083 28.6709L66.125 47.8276C67.1142 48.7512 67.1142 50.2495 66.125 51.173Z"
  //                       fill="white"
  //                     />
  //                   </svg>
  //                 </div>
  //               </>
  //             ) : (
  //               <>
  //                 {shareLoading ? (
  //                   <>
  //                     <div className="ball"></div>
  //                   </>
  //                 ) : (
  //                   <>
  //                     <div className="d-flex arrow-slide flex-nowrap justify-content-center align-items-center">
  //                       <div className="row d-flex flex-column align-items-center justify-content-center">
  //                         <div className="border-1 col-lg-6 col-9">
  //                           <div
  //                             style={{ backgroundImage: `url(${catMeme})` }}
  //                             className="border-2"
  //                           >
  //                             <picture>
  //                               <img
  //                                 src="./images/team mebers00-03.webp"
  //                                 alt="gc-mint.gif"
  //                               />
  //                             </picture>
  //                             <span>GRUMPY CATZ NFT</span>
  //                             <span>GRUMPY CATZ NFT</span>
  //                             <span>GRUMPY CATZ NFT</span>
  //                             <span>GRUMPY CATZ NFT</span>
  //                           </div>
  //                         </div>
  //                       </div>
  //                     </div>
  //                     <div className="btn__container">
  //                       {/* <a href={fbshareHref} target="_blank" className="btn-f" rel="noreferrer">
  //                         <span> LOGIN WITH FACEBOOK</span>
  //                       </a> */}
  //                       {session ? (
  //                         <a
  //                           onClick={handleMeme}
  //                           className="twitter-follow-button"
  //                         >
  //                           <span> Share on Twitter </span>
  //                         </a>
  //                       ) : (
  //                         <a
  //                           onClick={handleMeme}
  //                           className="twitter-follow-button"
  //                         >
  //                           <span> LOGIN WITH TWITTER </span>
  //                         </a>
  //                       )}
  //                       <div>
  //                         <button className="buttonSRB" onClick={redirect}>
  //                           Back
  //                         </button>
  //                       </div>
  //                     </div>
  //                   </>
  //                 )}
  //               </>
  //             )}
  //           </div>
  //      
  //       </MainStyle>
  //     </>
  //   );
};
export default ViewMeme;

// export async function getServerSideProps(
//   context: GetSessionParams | undefined
// ) {
//   const session = await getSession(context);
//   return {
//     props: {
//       session,
//     },
//   };
// }
