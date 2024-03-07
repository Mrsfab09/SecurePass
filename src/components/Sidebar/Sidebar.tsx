import { IoClose } from "react-icons/io5";

interface SidebarProps {
  onOpen: boolean;
  onClose: () => void;
}

export function Sidebar({ onOpen, onClose }: SidebarProps) {
  return (
    <div
      className={`w-96 h-full bg-[#ffffff9d] fixed top-0 right-[-400px] transition delay-75 duration-300 ease-in-out ${
        onOpen ? "translate-x-0 right-0" : "translate-x-full"
      }`}
    >
      <div className="border-b-2 h-16 flex justify-between align-center">
        <button className="relative left-0" onClick={onClose}>
          <IoClose size={"30px"} color="#5e5e5ebc" />
        </button>
      </div>
      <div className="relative flex align-center justify-center">
        <ul>
          <li>Menu Item 1</li>
          <li>Menu Item 2</li>
          <li>Menu Item 3</li>
        </ul>
      </div>
    </div>
  );
}
