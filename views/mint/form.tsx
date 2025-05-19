import * as React from "react";
import {
  usePrepareContractWrite,
  useContractWrite,
  useWaitForTransaction,
  useAccount,
  useBalance,
} from "wagmi";
import { contracts } from "config/constants";
import { useEffect, useState } from "react";
import Image from "next/image";
import ConnectButton from "components/Auth/ConnectButton";
import TransactionModal from "../../components/Modal/TransactionModal";
import { MintForm } from "components/validations/MintForm";
import { toast } from "react-toastify";
import { stringifyAddress } from "utils";
import { ethers } from "ethers";

export default function Form() {
  const [incValue, setIncValue] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const [verifuser, setVerifyUser] = useState(false);
  const [userBalance, setUserBalance] = useState<String>();
  const { address, isConnected } = useAccount();
  const [SuccessData, setSuccessData] = useState(false);

  const maxMint = 20;
  const mintPrice = 0.09;
  const mintValue = mintPrice * incValue;

  const isEligibleMint = isConnected;
  const balance = useBalance({
    addressOrName: address,
  });
  useEffect(() => setUserBalance(balance.data?.formatted), [balance]);

  const {
    config,
    error: prepareError,
    isError: isPrepareError,
  } = usePrepareContractWrite({
    address: contracts.GrumpyCatNFTContract.address,
    abi: [
      {
        inputs: [
          {
            internalType: "address",
            name: "to",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "quantity",
            type: "uint256",
          },
        ],
        name: "mint",
        outputs: [],
        stateMutability: "payable",
        type: "function",
      },
    ],
    functionName: "mint",
    // @ts-ignore
    args: [address, incValue],
    overrides: {
      value: ethers.utils.parseEther(mintValue.toString()),
    },
  });

  const { data, error, isError, write } = useContractWrite(config);
  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
  });
  console.log(prepareError, isPrepareError);
  useEffect(() => {
    if (isLoading == true) {
      setSuccessData(true);
    }
  }, [isLoading]);

  const handleClose = () => {
    setIsOpen(false);
    setSuccessData(false);
  };
  const MintExecute = async () => {
    setSuccessData(true);
    if (isLoading == true) {
      setSuccessData(true);
    } else if (isSuccess) {
      setSuccessData(false);
    } else if (isError) {
      setSuccessData(false);
    }
    if (mintValue > Number(userBalance)) {
      toast.dark(`Insufficient Balance`, {
        hideProgressBar: true,
        autoClose: 2000,
        type: "error",
        position: "bottom-left",
      });
    } else {
      if (incValue <= 0 || incValue > maxMint) {
        toast.dark(`Please Give Valid Number`, {
          hideProgressBar: true,
          autoClose: 2000,
          type: "error",
          position: "bottom-left",
        });
      } else {
        setIsOpen(true);
      }
    }
  };
  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center">
        <h2>
          GRUMPY CATZ <span> Pre - sale Mint</span>
        </h2>
        <p>Only Whitelist users can mint an NFT at 0.11 ETH</p>
      </div>
      <div className="row d-flex d-flex align-items-center justify-content-center">
        <div className="col-xl-5 order-2 order-lg-1 col-lg-6">
          <div className="card-form">
            <div className="d-flex flex-column">
              <label> Wallet Address</label>
              <input
                className="py-2 px-3"
                type="text"
                value={
                  address ? address : "0x000000000000000000000000000000000"
                }
                readOnly
                autoFocus
              />

              <MintForm isConnected={isConnected} verifuser={verifuser} />

              <div className="d-flex mt-4 justify-content-between">
                <div className="d-flex w-mob me-3 flex-column">
                  <label> Current Balance</label>
                  <input
                    className="py-2 px-3"
                    type="text"
                    value={balance.data?.formatted.toString()}
                    readOnly
                    autoFocus
                  />
                </div>
                <div className="d-flex align-items-center">
                  <div className="flex-column d-flex arrow  me-3">
                    <svg
                      onClick={() => isConnected && setIncValue(incValue + 1)}
                      className=" mb-2 "
                      width="17"
                      height="15"
                      viewBox="0 0 17 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.63809 0L16.9849 15H0.29126L8.63809 0Z"
                        fill="#2BFFD3"
                      />
                    </svg>
                    <svg
                      onClick={() => isConnected && setIncValue(incValue - 1)}
                      width="17"
                      height="15"
                      viewBox="0 0 17 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.63803 15L0.291194 -1.79446e-06L16.9849 -1.28837e-07L8.63803 15Z"
                        fill="#2BFFD3"
                      />
                    </svg>
                  </div>
                  <div className="d-flex flex-column">
                    <label> Amount</label>
                    <input
                      className="py-2 px-3"
                      onChange={(e) =>
                        isConnected && setIncValue(parseInt(e.target.value, 10))
                      }
                      value={incValue}
                      type="number"
                      min="1"
                      max="20"
                      placeholder="How Many Nft's"
                    />
                    <div className="mt-2 d-flex">
                      <span className="me-1"></span>{" "}
                      <span className="text-white text-nowrap">
                        {" "}
                        {maxMint} mint max
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <label className="m-0 mt-3"> Total</label>
              <span className="text-white price">
                {isConnected ? (
                  <>{incValue > 0 && incValue < 20 ? mintValue : "0.0 ETH"}</>
                ) : (
                  "0.0 ETH"
                )}
              </span>
            </div>

            <div className="d-flex justify-content-center mt-3">
              {!isConnected ? (
                <ConnectButton />
              ) : (
                <button
                  className="btn btn-primary"
                  disabled={isLoading}
                  onClick={MintExecute}
                >
                  MINT NOW
                </button>
              )}
            </div>
          </div>
        </div>

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
      </div>

      <TransactionModal
        isOpen={isOpen}
        address={stringifyAddress(address)}
        handleClose={handleClose}
        write={write}
        isSuccess={isSuccess}
        isError={isError}
        error={error}
        isLoading={isLoading}
        nfts={incValue}
        mintval={mintValue}
        SuccessData={SuccessData}
        prepareError={prepareError}
        isPrepareError={isPrepareError}
      />
    </>
  );
}
