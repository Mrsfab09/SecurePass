import { useState, ChangeEvent } from "react";
import { IoClose } from "react-icons/io5";

interface SidebarProps {
  onOpen: boolean;
  onClose: () => void;
  onChangeValue1: (value: string) => void;
  onChangeValue2: (value: string) => void;
  onChangeValue3: (value: string) => void;
  onChangeValue4: (value: string) => void;
  onChangeValue5: (value: string) => void;
}

export function Sidebar({
  onOpen,
  onClose,
  onChangeValue1,
  onChangeValue2,
  onChangeValue3,
  onChangeValue4,
  onChangeValue5,
}: SidebarProps) {
  const [length, setLength] = useState<string>("");
  const [small, setSmall] = useState("");
  const [capital, setCapital] = useState("");
  const [special, setSpecial] = useState("");
  const [number, setNumber] = useState("");

  const handleInputChange1 = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setLength(value);
    onChangeValue1(value);
  };
  const handleInputChange2 = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSmall(value);
    onChangeValue2(value);
  };
  const handleInputChange3 = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setCapital(value);
    onChangeValue3(value);
  };
  const handleInputChange4 = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSpecial(value);
    onChangeValue4(value);
  };
  const handleInputChange5 = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setNumber(value);
    onChangeValue5(value);
  };

  return (
    <div
      className={`w-96 h-full bg-[#ffffffda]  fixed top-0 right-[-10px] transition duration-300 ease-in-out ${
        onOpen ? "translate-x-0 right-0" : "translate-x-full"
      }`}
    >
      <div className="border-b-2 h-16 flex justify-between align-center">
        <button className="relative left-0" onClick={onClose}>
          <IoClose size={"30px"} color="#5e5e5ebc" />
        </button>
      </div>
      <div className="relative flex align-center flex-col p-5 gap-8 text-center">
        <p className="font-semibold text-lg uppercase italic text-slate-600">
          Theme
        </p>
        <div className="flex justify-center gap-16 font-semibold text-gray-400">
          <button className="w-20 h-20 border border-slate-300 rounded hover:scale-125 hover:transition"></button>
          <span className="absolute top-[170px] left-[110px] text-sm">
            Light
          </span>
          <button className="w-20 h-20 bg-slate-700 border border-slate-300 rounded hover:scale-125 hover:transition"></button>
          <span className="absolute top-[170px] right-[100px] text-sm">
            Dark
          </span>
        </div>
      </div>
      <p className="font-semibold text-lg uppercase italic text-slate-600 mt-16 text-center">
        Settings password
      </p>
      <div className="relative flex flex-col uppercase font-semibold text-slate-400 italic p-5 mt-5 ml-5 gap-8">
        <div className="flex flex-row gap-10">
          <p className="text-blue-400">password length</p>
          <input
            className="w-20 h-8 rounded bg-blue-200 p-2"
            type="number"
            value={length}
            onChange={handleInputChange1}
          />
        </div>
        <div className="flex flex-row gap-20">
          <p className="">small letters</p>
          <input
            className="w-20 h-8 rounded bg-slate-300 p-2"
            type="number"
            value={small}
            onChange={handleInputChange2}
          />
        </div>
        <div className="flex flex-row gap-16">
          <p>capital letters</p>
          <input
            className="w-20 h-8 rounded bg-slate-300 p-2"
            type="number"
            value={capital}
            onChange={handleInputChange3}
          />
        </div>
        <div className="flex flex-row gap-20">
          <p className="">special sings</p>
          <input
            className="w-20 h-8 rounded bg-slate-300 p-2"
            type="number"
            value={special}
            onChange={handleInputChange4}
          />
        </div>
        <div className="flex flex-row gap-28">
          <p>numbers</p>
          <input
            className="w-20 h-8 rounded bg-slate-300 p-2"
            type="number"
            value={number}
            onChange={handleInputChange5}
          />
        </div>
      </div>
    </div>
  );
}
