import styled from "styled-components";

export const MainStyle = styled.section`
  .cat-carousel .border-1 {
    flex-basis: 50% !important ;
  }
  .carousel-indicators {
    display: none;
  }
min-height: 100vh ;

  background-color: #1e1e1e !important;
  .carousel-control-prev-icon {
    background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='0.5' y='0.5' width='98.15' height='98.15' rx='9.5' fill='%23202020' stroke='%23DDDCDE'/%3E%3Cpath d='M33.0746 48.1962L53.6236 21.9491C54.6143 20.6836 56.2214 20.6836 57.2121 21.9491L59.609 25.0109C60.5987 26.275 60.5997 28.3225 59.6133 29.5893L43.3274 50.4881L59.6122 71.3883C60.5997 72.6551 60.5976 74.7026 59.608 75.9667L57.211 79.0285C56.2203 80.2939 54.6132 80.2939 53.6225 79.0285L33.0746 52.78C32.0839 51.5145 32.0839 49.4617 33.0746 48.1962V48.1962Z' fill='white'/%3E%3C/svg%3E%0A");
    background-repeat: no-repeat no-repeat;
    background-position: center center;
    background-size: cover;
  }
  .carousel-control-next-icon {
    background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='0.5' y='0.5' width='98.15' height='98.15' rx='9.5' fill='%23202020' stroke='%23DDDCDE'/%3E%3Cpath d='M33.0746 48.1962L53.6236 21.9491C54.6143 20.6836 56.2214 20.6836 57.2121 21.9491L59.609 25.0109C60.5987 26.275 60.5997 28.3225 59.6133 29.5893L43.3274 50.4881L59.6122 71.3883C60.5997 72.6551 60.5976 74.7026 59.608 75.9667L57.211 79.0285C56.2203 80.2939 54.6132 80.2939 53.6225 79.0285L33.0746 52.78C32.0839 51.5145 32.0839 49.4617 33.0746 48.1962V48.1962Z' fill='white'/%3E%3C/svg%3E%0A");
    background-repeat: no-repeat no-repeat;
    background-position: center center;
    background-size: cover;
    transform: rotate(180deg);
  }
  .carousel-control-prev {
    left: -34%;
  }
  .carousel-control-next {
    right: -34%;
  }
  .carousel-item {
    overflow: hidden;
  }
  .carousel-inner {
    border-radius: 17px;
    overflow: hidden;
  }
  .carousel-control-next-icon,
  .carousel-control-prev-icon {
    width: 67%;
    height: 10%;
  }
  /////////////
  > .container {
    margin-top: 72px;
  }

  padding: 0 !important;
  justify-content: flex-start;
  h2 {
    margin: -12px;
    font-size: 44px;
  }
  p {
    font-size: 14px;
  }
  .row {
    margin-top: 28px;
  }

  label {
    color: var(--teal);
    margin-bottom: 10px;
  }
  .card-form {
    font-family: Roboto;
    padding: 28px;
    padding-top: 50px;
    background-color: #252525;
    border-radius: 10px;
  }
  .card-form i {
    font-size: 24px;
    color: red;
  }
  .card-form button {
    font-family: "Bebas Neue", cursive;
    padding-left: 15%;
    padding-right: 15%;
    margin-top: 10px;
    color: var(--teal);
    text-transform: uppercase;
  }
  .price {
    font-size: 24px;
  }
  input {
    background-color: #454545;
    border-radius: 3px;
    border: none;
    padding: 5px;
    color: white;
  }
  .border-1,
  .border-2 {
    border: 3px solid var(--teal);
    padding: 3%;
    border-radius: 24px;
  }
  .border-1 {
    position: relative;
  }
  .border-2 {
    min-height: 30rem;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    padding: 0;
    margin: 0;
  }

  .border-2 > span {
    white-space: nowrap;
    font-size: 24px;
    color: white;
    position: absolute;
    background-color: #1e1e1e;
    padding: 0 24px;
  }
  .border-2 > span:first-of-type {
    top: 0;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  input:focus-visible {
    outline: none;
  }
  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  /* Firefox */
  input[type="number"] {
    -moz-appearance: textfield;
  }
  .border-2 > span:last-of-type {
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 50%);
  }
  .border-2 > span:nth-of-type(2) {
    top: 50%;
    left: 0;
    transform: translate(-50%, -50%) rotate(-90deg);
  }
  .border-2 > span:nth-of-type(3) {
    top: 50%;
    right: 0;
    transform: translate(50%, -50%) rotate(-90deg);
  }
  .w-mob {
    width: 100%!important;
  }

  @media (min-width: 992px) {
  .card-form {
    height:500px!important;
  }
  .card-form {
    padding-top: 50px;
}
}
  @media (max-width: 992px) {
    .w-mob {
      width: 50%;
    }
    .border-2 > span {
      font-size: 16px !important;
    }
    h2 {
      margin: -6px;
      font-size: 28px;
    }
    p {
      font-size: 10px;
    }
    padding: 50px 0 !important;
    .border-2 img {
      max-width: 100%;
    }
  }
  .message {
    cursor: pointer;
    font: 15px Helvetica, Arial, sans-serif;
    background: #eee;
    padding: 20px;
    text-align: center;
    transition: 100ms ease-in background;
    margin: 10px;
  }
  .message:hover {
    background: #ccc;
  }
  .lds-roller {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
  }
  .lds-roller div {
    animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    transform-origin: 40px 40px;
  }
  .lds-roller div:after {
    content: " ";
    display: block;
    position: absolute;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #fff;
    margin: -4px 0 0 -4px;
  }
  .lds-roller div:nth-child(1) {
    animation-delay: -0.036s;
  }
  .lds-roller div:nth-child(1):after {
    top: 63px;
    left: 63px;
  }
  .lds-roller div:nth-child(2) {
    animation-delay: -0.072s;
  }
  .lds-roller div:nth-child(2):after {
    top: 68px;
    left: 56px;
  }
  .lds-roller div:nth-child(3) {
    animation-delay: -0.108s;
  }
  .lds-roller div:nth-child(3):after {
    top: 71px;
    left: 48px;
  }
  .lds-roller div:nth-child(4) {
    animation-delay: -0.144s;
  }
  .lds-roller div:nth-child(4):after {
    top: 72px;
    left: 40px;
  }
  .lds-roller div:nth-child(5) {
    animation-delay: -0.18s;
  }
  .lds-roller div:nth-child(5):after {
    top: 71px;
    left: 32px;
  }
  .lds-roller div:nth-child(6) {
    animation-delay: -0.216s;
  }
  .lds-roller div:nth-child(6):after {
    top: 68px;
    left: 24px;
  }
  .lds-roller div:nth-child(7) {
    animation-delay: -0.252s;
  }
  .lds-roller div:nth-child(7):after {
    top: 63px;
    left: 17px;
  }
  .lds-roller div:nth-child(8) {
    animation-delay: -0.288s;
  }
  .lds-roller div:nth-child(8):after {
    top: 56px;
    left: 12px;
  }
  @keyframes lds-roller {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
