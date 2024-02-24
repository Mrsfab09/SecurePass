import styles from "./HomePage.module.css";
import { IoMdArrowForward } from "react-icons/io";
import { FaGithub } from "react-icons/fa";

export function HomePage() {
  return (
    <>
      <div className={styles.card1}>
        <img src="/blue_card.png" alt="" />
      </div>
      <div className="flex justify-center align-center">
        <div className="absolute w-[800px] mt-[-300px] p-12">
          <p className="text-lg font-light text-slate-500 tracking-[4px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga porro
            aspernatur, at possimus molestias laudantium in voluptatem. Atque,
            natus voluptatem doloribus minus ex unde cum eum ab iure, voluptate
            corrupti fugit eligendi! Id, at amet. Nam aut quisquam culpa. Nobis
            ea animi consectetur ratione dolorem, laudantium laboriosam
            obcaecati et corporis, reprehenderit ad tempora? Ullam eligendi
            nulla maxime sapiente, quia vero tenetur veritatis soluta magnam
            sed. Iste eos eum quo dolores laboriosam dolorum adipisci minima!
            Soluta rerum, veritatis numquam corrupti dolore aut architecto
            debitis molestiae mollitia aperiam ex est possimus laudantium
            sapiente corporis! Architecto blanditiis dolore fugiat qui explicabo
            dolores quis.
          </p>
        </div>
        <div className="absolute mt-[180px]">
          <button className="relative bg-blue-700 text-xl font-medium p-4 rounded-2xl flex flex-row gap-1 hover:bg-blue-600">
            Get started
            <span className="mt-[5px]">
              <IoMdArrowForward />
            </span>
          </button>
          <div className="bg-[#3e68ff4d] text-xl font-medium w-45 h-16 rounded-xl mt-[-55px]"></div>
        </div>
      </div>
      <div className={styles.card2}>
        <img src="/blue_card.png" alt="" />
      </div>
      <footer className="relative mt-[-200px] text-center flex justify-center">
        <button>
          <a href="https://github.com/Mrsfab09/Password-generator">
            <FaGithub size={"25px"} color="#d3d3d345" />
          </a>
        </button>
      </footer>
    </>
  );
}
