import { BraveSVG, WalletConnectSVG, TrustWalletSVG, MetamaskSVG, LedgerSVG } from "components/SVGIcons";
import { Modal, Button } from "react-bootstrap";
import { useConnect } from "wagmi";

export default function WalletModal(props: any) {
  const { connect, connectors, error, isLoading, pendingConnector } =
    useConnect();
  const icon = (connectorname: string) => {
    switch (connectorname) {
      case 'Injected': {
        return <TrustWalletSVG />
      }
      case 'MetaMask': {
        return <MetamaskSVG />
      }
      case 'WalletConnect': {
        return <WalletConnectSVG />
      }
      case 'Coinbase Wallet': {
        return <BraveSVG />
      }
      default: {
        return <LedgerSVG />
      }
    }
  }
  return (
    <Modal show={props.isOpen} onHide={props.closeModal} centered size="lg">
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <div className="d-flex flex-column wall">
          <h2>CONNECT YOUR WALLET</h2>
          <p>Select Your Preffered Wallet</p>
          <div className="row">
            {connectors.map((connector) => (
              <div key={connector.id} onClick={() => connect({ connector })} className="col-3 wallet-card m-2">
                {icon(connector.name)}
                <span>
                  {connector.name}
                  <br />
                  {!connector.ready && " (unsupported)"}
                  {isLoading &&
                    connector.id === pendingConnector?.id &&
                    " (connecting)"}
                </span>
              </div>
            ))}
          </div>
          <div className="d-flex text-danger justify-content-center mt-3">
            {error && <div>{error.message} !!</div>}
          </div>
        </div>
      </Modal.Body>
    </Modal>

  );
}
