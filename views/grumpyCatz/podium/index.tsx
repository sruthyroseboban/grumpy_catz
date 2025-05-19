import { PodiumStyle } from "./PodiumStyle";

const Podium = () => {
  return (
    <PodiumStyle >
      <div id="podium" className="container">
        <picture className="d-sm-block d-none">
          <img src="./images/press.webp" alt="press" />
        </picture>
        <picture className="d-sm-none">
          <img src="./images/MOBILE_PRESS.webp" alt="MOBILE_PRESS" />
        </picture>
        <div className="row mt-5">

          <div className="col-12 mb-5 col-md">
            <div className="video-container">
              <iframe src="https://www.youtube.com/embed/wKyb8WQjqNk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
          </div>
          <div className="col-12 col-md">
            <div className="video-container">
              <iframe src="https://www.youtube.com/embed/J88d6wNdQ1w" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
          </div>
        </div>
      </div>
    </PodiumStyle>
  );
};
export default Podium;
