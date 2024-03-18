// import { FaGithub } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import styles from "./HomePage.module.css";
import { useEffect } from "react";

export function HomePage() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      document.body.style.backgroundColor = "#121a31";
    } else {
      document.body.style.backgroundColor = "initial";
    }

    return () => {
      document.body.style.backgroundColor = "initial";
    };
  }, [location.pathname]);

  return (
    <>
      <div className={styles.circle}></div>
      <div className={styles.circle2}></div>
      <div className={styles.circle3}></div>
      <div className="relative flex justify-center align-center top-10 bottom-0">
        <img className="w-48" src="./SecurePass-logo.png" alt="logo" />
      </div>
      <div className="relative flex justify-center align-center mt-24">
        <p className="w-[500px] text-3xl text-slate-200 font-bold text-center md:text-5xl">
          SecurePass
        </p>
      </div>
      <div className="relative flex justify-center align-center mt-12">
        <p className="w-[300px] text-lg text-slate-400 tracking-widest text-center leading-8 md:w-[500px]">
          This is an application for generating secure passwords. Generate
          unique passwords of any length and with a variety of characters to
          keep your online accounts protected. Easy to use, Secure Pass allows
          you to quickly create and copy secure passwords
        </p>
      </div>
      <div className="relative flex justify-center align-center mb-0 mt-16">
        <button className="absolute w-32 md:w-32 bg-buttonColorStart rounded-lg p-2 md:p-3 text-white text-xl font-semibold hover:bg-buttonColorHoverS">
          <Link to={"/generator"}>Get started</Link>
        </button>
        <span className="relative w-32 bg-[#6c37ff5d] rounded-lg p-2 mt-9 md:p-3"></span>
      </div>
    </>
  );
}
