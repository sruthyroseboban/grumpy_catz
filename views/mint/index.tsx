import { MainStyle } from "./MainStyle";
import  Form  from "./form";
import Nav from "components/Nav";

const MainMint = () => {
  return (
    <MainStyle>
      <Nav />
      <div className="container">
        <Form />
      </div>
    </MainStyle>
  );
};
export default MainMint;
