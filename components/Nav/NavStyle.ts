import styled from "styled-components";

export const NavStyle = styled.nav`

    position: fixed;
    z-index: 999999999;
    left: 0;
    top: 0;
    display: flex;
    justify-content: space-between;
    width: 100vw;
    align-items: center;
    padding: 24px 24px 12px 17px;
    background-color: #00000024;

 ul {
    height: 105vh;
    display: flex;
    flex-direction: column;
    justify-content: start;
    padding-left: 50px !important;
}

 a {
    font-family: "fin_frakturregular";
    color: white;
    font-size: 28px;
    cursor: pointer;
}

#menuToggle {
    cursor: pointer;
    display: block;
    z-index: 1;
    -webkit-user-select: none;
    user-select: none;
}

#menuToggle a {
    text-decoration: none;
    color: #232323;
    transition: color 0.3s ease;
}

#menuToggle a:hover {
    color: var(--teal);
}

#menuToggle input {
    display: block;
    width: 40px;
    height: 32px;
    position: absolute;
    top: -7px;
    left: -5px;
    cursor: pointer;
    opacity: 0;
    /* hide this */
    z-index: 99999;
    /* and place it over the hamburger */
    -webkit-touch-callout: none;
}

#menuToggle span {
    cursor: pointer;
    display: block;
    width: 33px;
    height: 4px;
    margin-bottom: 5px;
    position: relative;
    background: #cdcdcd;
    border-radius: 3px;
    z-index: 1;
    transform-origin: 4px 0px;
    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
}

#menuToggle span:first-child {
    transform-origin: 0% 0%;
}

#menuToggle span:nth-last-child(2) {
    transform-origin: 0% 100%;
}
/* 
 * Transform all the slices of hamburger
 * into a crossmark.
 */

#menuToggle input:checked~span {
    opacity: 1;
    transform: rotate(45deg) translate(-2px, -1px);
    background: #232323;
}

#menuToggle input:checked~span:nth-last-child(3) {
    opacity: 0;
    transform: rotate(0deg) scale(0.2, 0.2);
}
/*
 * Ohyeah and the last one should go the other direction
 */

#menuToggle input:checked~span:nth-last-child(2) {
    transform: rotate(-45deg) translate(0, -1px);
}
/*
 * Make this absolute positioned
 * at the top left of the screen
 */

#menu {
    position: absolute;
    width: 300px;
    top: 0;
    left: 0;
    padding-top: 100px;
    background: #ededed;
    list-style-type: none;
    -webkit-font-smoothing: antialiased;
    /* to stop flickering of text in safari */
    transform-origin: 0% -2%;
    transform: translate(-103%, 0);
    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
    @media (max-width: 992px) {
        padding-left: 15% !important;
    }
}

#menu li {
    padding: 10px 0;
    font-size: 22px;
}
/*
 * And let's slide it in from the left
 */

#menuToggle input:checked~ul {
    transform: none;
}
@media (max-width:992px) {
    #menu {
        padding-top: 80px;
    }
    a {
        font-size: 22px;
    }
}
`;