import styled from "styled-components";

export const MainStyle = styled.section`
 transition: 0.5s;
 min-height: 100vh;
  background: url("./images/HERO_mockup.png");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  @media (max-width: 992px) {
    .p-topbar{
      padding-top: 10px !important;
      font-size: 16px;
    }
    background: url("./images/HERO_ mobile-bg.png");
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
  }
.nav {
  z-index: 9999999999;
  height: 40px;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  background-color: var(--teal);
}
nav {
  margin-top: 24px;
}
  .scroller img {
    position: absolute;
    bottom: 7%;
    left: 17px;
  }
  .smoke img {
    position: absolute;
    bottom: 0;
    left: 0;
    min-width: 200vw;
    transform: translateY(50%);
    animation: mymove 60s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
  }
  @keyframes mymove {
    from {
      left: 0px;
    }
    to {
      left: -100vw;
    }
  }
  @media (max-width: 992px) {
     
      nav a {
        font-size: 22px;
      }
    }


`;
