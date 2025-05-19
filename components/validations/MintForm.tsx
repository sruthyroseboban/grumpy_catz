import { WhiteListWVG } from "components/SVGIcons/Whitelist";
import { WhitelistErrorSvg } from "components/SVGIcons/WhitelistErrorSvg";

export const MintForm = ({
  isConnected,
  verifuser,
}: {
  isConnected: Boolean;
  verifuser: Boolean;
}) => {
  return (
    <div className="d-flex align-items-center mt-3 my-2">
      {isConnected ? (
        <>
          {!verifuser ? (
            <>
              <WhiteListWVG />
              <label className="text-muted m-0">
                Wallet is authorized to mint
              </label>
            </>
          ) : (
            <>
              <WhitelistErrorSvg />
              <label className="text-muted m-0">
                Wallet must be whitelisted
              </label>
            </>
          )}
        </>
      ) : (
        <>
          <WhitelistErrorSvg />
          <label className="text-muted m-0">
            Please connect to your wallet
          </label>
        </>
      )}
    </div>
  );
};
