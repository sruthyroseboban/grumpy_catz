import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
// import { SessionProvider } from "next-auth/react";
import {
  WagmiConfig,
  createClient,
  configureChains,
  defaultChains,
} from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { CoinbaseWalletConnector } from "wagmi/connectors/coinbaseWallet";
import { InjectedConnector } from "wagmi/connectors/injected";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";

const { chains, provider, webSocketProvider } = configureChains(defaultChains, [
  alchemyProvider({ apiKey: "3eYXnZXYu6S-Th7S2PQm68r1dwb5nX7Q" }),
  publicProvider(),
]);

const client = createClient({
  autoConnect: true,
  connectors: [
    new InjectedConnector({
      chains,
      options: {
        name: "Injected",
        shimDisconnect: true,
      },
    }),
    new MetaMaskConnector({
      chains,
      options: {
        shimDisconnect: false,
      },
    }),
    new CoinbaseWalletConnector({
      chains,
      options: {
        appName: "Grumpy Catz",
      },
    }),
    new WalletConnectConnector({
      chains,
      options: {
        qrcode: true,
      },
    }),
  ],
  provider,
  webSocketProvider,
});

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <WagmiConfig client={client}>
      <Component {...pageProps} />
      <ToastContainer autoClose={2000} />
    </WagmiConfig>
  );
}

export default MyApp;
