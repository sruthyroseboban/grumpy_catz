import { contracts } from "config/constants";
import { Modal } from "react-bootstrap";
import { Transaction } from "./Transaction";

export default function TransactionModal({
  address,
  isOpen,
  handleClose,
  write,
  isSuccess,
  isError,
  error,
  isLoading,
  nfts,
  mintval,
  SuccessData,
  prepareError,
  isPrepareError,
}: {
  address: any;
  isOpen: boolean;
  handleClose: any;
  write: any;
  isSuccess: boolean;
  isError: boolean;
  error: any;
  isLoading: boolean;
  nfts: any;
  mintval: any;
  SuccessData: boolean;
  prepareError: any;
  isPrepareError: any;
}) {
  return (
    <Modal show={isOpen} size="lg" onHide={handleClose}>
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <Transaction>
          {isLoading ? (
            <div className="spinner-grow text-success" role="status"></div>
          ) : isSuccess && SuccessData ? (
            <i className="bi bi-check-circle-fill"></i>
          ) : isError && SuccessData ? (
            <i className="bi bi-x-circle-fill text-danger"></i>
          ) : (
            <i className="bi bi-images"></i>
          )}

          <h2 className="display-3 my-3">
            <span> Confirm Miniting</span>
          </h2>
          <p>
            Adress: <br /> <a href=""> {address}</a>
          </p>
          <p>
            NFT&apos;s: {} {nfts}
          </p>
          <p>
            {" "}
            Total: {} {mintval} ETH
          </p>
          {/* {(isPrepareError || isError) && (
            <div>Error: {(prepareError || error)?.message}</div>
          )} */}
          <div className="d-flex justify-content-center mb-2 gap-4">
            {isSuccess && SuccessData ? (
              <>
                <a
                  href={`https://etherscan.io/token/${contracts.GrumpyCatNFTContract.address}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <button
                    className="btn btn-primary mt-3 w-100 px-5 py-2"
                    onClick={() => write?.()}
                  >
                    VIEW TRANSACTION
                  </button>
                </a>
                <a href={"/account-assets"}>
                  <button className="btn btn-primary mt-3 w-100 px-5 py-2">
                    VIEW ASSETS
                  </button>
                </a>
              </>
            ) : (
              <a>
                <button
                  className="btn btn-primary mt-3 px-5 py-2"
                  onClick={() => write?.()}
                >
                  Mint Now
                </button>
              </a>
            )}
          </div>
        </Transaction>
      </Modal.Body>
    </Modal>
  );
}
