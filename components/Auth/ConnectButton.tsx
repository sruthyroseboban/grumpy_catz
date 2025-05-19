import { useState } from "react";
import ConnectionModal from "components/Modal/WalletModal";
import { Button } from "react-bootstrap";
import { useAccount, useDisconnect } from "wagmi";
import { truncateAddress, truncateEthAddress } from "utils";
import AccountModal from '../Modal/AccountModal';
export default function ConnectButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const handleClose = () => setIsOpen(false);
  const handleAccountClose = () => setIsAccountOpen(false);
  const { isConnected, address }: any = useAccount();
  const { disconnect } = useDisconnect();
  const balance = 0.00;

  if (isConnected) {
    return (
      <>
        <Button
          className="btn text-nowrap px-4 mb-2 btn-primary"
          onClick={() => setIsAccountOpen(true)}
        >
          {truncateEthAddress(address,'••••')} 
      
      
        </Button>

        <AccountModal isAccountOpen={isAccountOpen} closeModal={handleAccountClose} disconnect={disconnect} handleAccountClose={handleAccountClose} address={address} balance={balance} />

      </>
    );
  }
  return (
    <>
      <Button
        className="btn text-nowrap px-4 btn-primary"
        onClick={() => setIsOpen(true)}
      >
        Connect Wallet
      </Button>
      <ConnectionModal isOpen={isOpen} closeModal={handleClose} />
    </>
  );
}
