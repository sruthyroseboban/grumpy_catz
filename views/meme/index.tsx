import { MainStyle } from "../mint/MainStyle";
import MemeCreate from "./CreateMeme";
import Nav from "components/Nav";

const Meme = () => {
  return (
    <MainStyle>
      <Nav />
      <MemeCreate />
    </MainStyle>
  );
};
export default Meme;
