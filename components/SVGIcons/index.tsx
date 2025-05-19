import Image from 'next/image'
import Brave from './Brave.svg'
import Ledger from './Ledger.svg'
import Metamask from './Metamask.svg'
import WalletConnect from './WalletConnect.svg'
import TrustWallet from './TrustWallet.svg'



export const BraveSVG = () => {
    return (
        <Image
        src={Brave}
        alt="Binance"
        width="350px"
        height="300px"
        layout="responsive" 
    />
    )
}

export const MetamaskSVG = () => {
    return (
        <Image
        src={Metamask}
        alt="Metamask"
        width="350px"
        height="300px"
        layout="responsive" 
    />
    )
}

export const TrustWalletSVG = () => {
    return (
        <Image
        src={TrustWallet}
        alt="TrustWallet"
        width="350px"
        height="300px"
        layout="responsive" 
    />
    )
}

export const WalletConnectSVG = () => {
    return (
        <Image
        src={WalletConnect}
        alt="WalletConnect"
        width="350px"
        height="300px"
        layout="responsive" 
    />
    )
}

export const LedgerSVG = () => {
    return (
        <Image
        src={Ledger}
        alt="Ledger"
        width="350px"
        height="300px"
        layout="responsive" 
    />
    )
}