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
          Lorem ipsum dolor sit amet consectetur
        </p>
      </div>
      <div className="relative flex justify-center align-center mt-12">
        <p className="w-[500px] text-lg text-slate-400 tracking-widest text-center">
          Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Sapiente quidem ex quo totam
          perspiciatis voluptatibus qui deserunt? Commodi hic explicabo at
          architecto? Doloremque officiis excepturi, molestiae vero, quae
          consectetur, laudantium minima sint facere neque explicabo veritatis
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          dolor corporis ullam natus nam qui iure molestias, at vitae amet.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At ea ab amet
          officiis labore quasi consequatur placeat ipsam quisquam, neque,
          magnam illum laboriosam molestiae voluptate dolor? Provident sed
          aspernatur doloremque!
        </p>
      </div>
      <div className="relative flex justify-center align-center mb-0 mt-16">
        <button className="absolute w-32 bg-[#6B37FF] rounded-lg p-3 text-white text-xl font-semibold hover:bg-[#6c37ffb9]">
          Get started
        </button>
        <span className="relative w-32 bg-[#6c37ff5d] rounded-lg p-3 mt-9"></span>
      </div>
    </>
  );
}
