import { useMediaPredicate } from "react-media-hook";
import { Wrapper } from "./Wrapper";

const GrumpySection = ({ myRef, moveCat }: any) => {
  const biggerThan567 = useMediaPredicate("(max-width: 567px)");

  return (
    <Wrapper>
      <picture className="smoke">
        <img src="./images/smoke.webp" alt="grumpy-hero" />
        <img src="./images/smoke.webp" alt="grumpy-hero" />
        <img src="./images/smoke.webp" alt="grumpy-hero" />
      </picture>
      <div
        ref={myRef}
        id="about"
        className="container d-flex flex-nowrap flex-column flex-sm-row justify-content-start"
      >
        <picture className="align-self-center d-none d-sm-inline icons">
          <img src="./images/regime-counter.webp" alt="grumpy-sec2-2" />
        </picture>
        <picture className="align-self-center icon-mob d-sm-none order-2">
          <img src="./images/regime-counter-mobile.webp" alt="grumpy-sec2-2" />
        </picture>
        <div className="d-flex flex-nowrap order-1">
          <picture className="rock">
            <img
              style={{
                transform: `translate(${biggerThan567 ? -10 : 20}%,${
                  (moveCat - 25) / 90
                }%) `,
              }}
              src="./images/regime-stone.webp"
              alt="grumpy-sec2-2"
            />
          </picture>
          <picture className="cat">
            <img
              style={{
                transform: `translate(${biggerThan567 ? -3 : -20}%, ${
                  100 - moveCat / 85
                }%) `,
              }}
              src="./images/regime-cat.webp"
              alt="grumpy-sec2-1"
            />
          </picture>
        </div>
      </div>
    </Wrapper>
  );
};
export default GrumpySection;
