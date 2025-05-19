import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { NavStyle } from "./NavStyle";
import dynamic from "next/dynamic";
const ConnectButton = dynamic(() => import("../Auth/ConnectButton"), {
  ssr: false,
});

const Nav = () => {
  const [check, setCheck] = useState(false);
  const ref: any = useRef(null);
  const router = useRouter();

  useEffect(() => {
    const handleClick = (e: { target: any }) => {
      if (ref.current.contains(e.target)) {
        return;
      }
      setCheck(false);
    };
    document.body.addEventListener("click", handleClick);
    return () => {
      document.body.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <NavStyle ref={ref} role="navigation">
      <div
        onClick={() => {
          setCheck(!check);
        }}
        id="menuToggle"
      >
        <input checked={check} type="checkbox" readOnly />
        <span />
        <span />
        <span />
        <ul id="menu">
          <li>
            <Link href="/#home">
              <a className={router.asPath == "/#home" ? "menu-teal" : ""}>
                {" "}
                home{" "}
              </a>
            </Link>
          </li>
          <li>
            <Link href="/#about">
              <a className={router.asPath == "/#about" ? "menu-teal" : ""}>
                {" "}
                about{" "}
              </a>
            </Link>
          </li>
          <li>
            <Link href="/#charity">
              <a className={router.asPath == "/#charity" ? "menu-teal" : ""}>
                charity
              </a>
            </Link>
          </li>
          <li>
            <Link href="/#utilities">
              <a className={router.asPath == "/#utilities" ? "menu-teal" : ""}>
                utilities
              </a>
            </Link>
          </li>
          <li>
            <Link href="/#shop">
              <a className={router.asPath == "/#shop" ? "menu-teal" : ""}>
                {" "}
                shop{" "}
              </a>
            </Link>
          </li>
          <li>
            <Link href="/#team">
              <a className={router.asPath == "/#team" ? "menu-teal" : ""}>
                team
              </a>
            </Link>
          </li>
          <li>
            <Link href="/#faq">
              <a className={router.asPath == "/#faq" ? "menu-teal" : ""}>faq</a>
            </Link>
          </li>
          <li>
            <a target="_blank" href="./whitepaper.pdf">
              whitepaper
            </a>
          </li>
          <li>
            <Link href="/#followus">
              <a className={router.asPath == "/#followus" ? "menu-teal" : ""}>
                follow us
              </a>
            </Link>
          </li>
          <li>
            <Link href="/mint">
              <a className={router.pathname == "/mint" ? "menu-teal" : ""}>
                {" "}
                mint{" "}
              </a>
            </Link>
          </li>
       
        </ul>
      </div>

      <div className="d-flex">
      {router.pathname == "/" ? (
      <>
        <Link href="/mint">mint now</Link>
        <a className="mx-4"
        target="_blank"
        href="https://twitter.com/Grumpycatznftz"
        rel="noreferrer"
      >
        <i className="bi m-0 bi-twitter"></i>
      </a>
      <a
        target="_blank"
        href="https://discord.com/invite/grumpy-catz"
        rel="noreferrer"
      >
        <i className="bi bi-discord"></i>
      </a>
      </>
      ) : router.pathname == "/meme" ? (
       <>
        <Link href="/ViewMeme"> view meme</Link>
        <a className="mx-4"
        target="_blank"
        href="https://twitter.com/Grumpycatznftz"
        rel="noreferrer"
      >
        <i className="bi m-0 bi-twitter"></i>
      </a>
      <a
        target="_blank"
        href="https://discord.com/invite/grumpy-catz"
        rel="noreferrer"
      >
        <i className="bi bi-discord"></i>
      </a>
       </>
      ) : (
        <ConnectButton />
      )}
          
          </div>


      
    </NavStyle>
  );
};

export default Nav;
