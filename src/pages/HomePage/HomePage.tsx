// import { FaGithub } from "react-icons/fa";
import styles from "./HomePage.module.css";
export function HomePage() {
  return (
    <>
      <div className={styles.circle}></div>
      <div className={styles.circle2}></div>
      <div className={styles.circle3}></div>
      <div className="relative flex justify-center align-center mt-48">
        <p className="w-[500px] text-4xl text-slate-200 font-bold text-center md:text-5xl">
          SecurePass
        </p>
      </div>
      <div className="relative flex justify-center align-center mt-12">
        <p className="w-[500px] text-lg text-slate-400 tracking-widest text-center leading-8">
          To intuicyjna aplikacja do generowania bezpiecznych haseł. Wygeneruj
          unikalne hasła o dowolnej długości i z różnorodnością znaków, aby
          zapewnić ochronę Twoim kontom online. Prosta w użyciu, Secure Pass
          umożliwia szybkie tworzenie i kopiowanie bezpiecznych haseł
        </p>
      </div>
      <div className="relative flex justify-center align-center mb-0 mt-16">
        <button className="absolute w-32 bg-buttonColorStart rounded-lg p-3 text-white text-xl font-semibold hover:bg-buttonColorHoverS">
          Get started
        </button>
        <span className="relative w-32 bg-[#6c37ff5d] rounded-lg p-3 mt-9"></span>
      </div>
    </>
  );
}
