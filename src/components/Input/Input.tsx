import { FaRegCopy } from "react-icons/fa6";

interface InputProps {
  value: string;
  copy: () => void;
}

export function Input({ value, copy }: InputProps) {
  return (
    <>
      <div className="flex justify-center align-center mt-48">
        <div className="absolute w-96 bg-inherit p-5 border-slate-400 border-b-4 font-semibold text-2xl mt-10">
          <label className="absolute text-slate-500 bg-inherit">{value}</label>
          <span className="relative flex justify-end">
            <FaRegCopy color="#5e5e5ed6" onClick={copy} cursor={"pointer"} />
          </span>
        </div>
      </div>
    </>
  );
}
