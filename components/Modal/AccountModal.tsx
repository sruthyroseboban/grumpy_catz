import { contracts } from "config/constants";
import Link from "next/link";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import { truncateEthAddress } from "utils";
import { useAccount, useBalance, useContractRead, useDisconnect } from "wagmi";
import { Transaction } from "./Transaction";

export default function AccountModal(props: any) {
  const { address } = useAccount();
  const { disconnect } = useDisconnect();
  const [count, setCount] = useState(0);
  const balance = useBalance({
    addressOrName: address,
  });

  const { data } = useContractRead(
    address && {
      address: contracts.GrumpyCatNFTContract.address,
      abi: contracts.GrumpyCatNFTContract.abi,
      functionName: "walletOfOwner",
      args: [address],
      onSuccess(dt: any) {
        setCount(dt.length);
      },
    }
  );
  const disconnectAccount = () => {
    disconnect();
  };

  return (
    <Modal show={props.isAccountOpen} size="lg" onHide={props.closeModal}>
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <Transaction>
          <i className="bi bi-person-circle"></i>

          <h2 className="display-3 my-3">
            <span>Account Information</span>
          </h2>

          <p className="text-center">
            Adress:{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href={`https://etherscan.io/address/${address}`}
            >
              {" "}
              {truncateEthAddress(address, "••••")}
            </a>
          </p>
          <p>BALANCE:{balance.data?.formatted}</p>
          <Link href="/account-assets">
            <p>NFT&apos;s: {count}</p>
          </Link>
          <div className="d-flex justify-content-center mb-2 gap-4">
            <a>
              <button
                className="btn btn-primary mt-3 px-5 py-2"
                onClick={disconnectAccount}
              >
                DISCONNECT
              </button>
            </a>
          </div>
        </Transaction>
      </Modal.Body>
    </Modal>
  );
}
