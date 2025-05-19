import Countdown, { zeroPad } from "react-countdown";
import { TimeStyle } from "./timeStyle";

const Completionist = () =>  <h3 className="text-black  p-topbar pt-1">GRUMPYCATZ NFT PUBLIC SALE</h3>;
  const  renderer = ({ days, hours, minutes, seconds, completed }: any) => {
  if (completed) {
    return <Completionist />;
  } else {
    return (
      <TimeStyle className="countdown d-flex flex-row align-items-center">
        <div className="countdown_container">
          <span className="countdown_time">PRESALE MINTING EXTENDED:</span>
        </div>
        <div className="countdown_container">
          <span className="countdown_time">{zeroPad(days)}D</span>
        </div>
        <span className="colon">:</span>
        <div className="countdown_container">
          <span className="countdown_time">{zeroPad(hours)}H</span>
        </div>
        <span className="colon">:</span>
        <div className="countdown_container">
          <span className="countdown_time">{zeroPad(minutes)}M</span>
        </div>
        <span className="colon">:</span>
        <div className="countdown_container">
          <span className="countdown_time">{zeroPad(seconds)}S</span>
        </div>
      </TimeStyle>
    );
  }
};

const Timee = () => {
  return (
    <Countdown date={1668280271000} renderer={renderer} />
  )
}
export default Timee