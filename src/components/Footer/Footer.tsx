import { FaGithub } from "react-icons/fa";

export function Footer() {
  return (
    <>
      <footer className="absolute bottom-5">
        <div className="flex justify-center align-center mb-3">
          <a href="https://github.com/Mrsfab09">
            <FaGithub size={"23px"} color="#5e5e5e" />
          </a>
        </div>
        <p className="text-slate-500 italic font-semibold">Made by MrsFab09</p>
      </footer>
    </>
  );
}
