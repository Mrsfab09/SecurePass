import { Toaster, toast } from "sonner";
import { Input } from "../../components/Input/Input";
import { Shadow } from "../../components/Shadow/Shadow";
import { MdOutlineSettings } from "react-icons/md";
import styles from "./Generator.module.css";
import { useState } from "react";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { Footer } from "../../components/Footer/Footer";

export function Generator() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={styles.body}>
      <Shadow />
      <Input />
      <Toaster richColors position="top-center" />
      <div className="flex justify-center align-center mt-48">
        <button
          onClick={() => {
            toast.success("Event has been created");
          }}
          className="absolute w-32 bg-buttonColorGenerate rounded-lg p-3 text-white text-xl font-semibold z-10 hover:bg-buttonColorHoverG"
        >
          Generate
        </button>
        <span className="relative w-32 bg-buttonColor2 rounded-lg p-3 mt-9 z-1"></span>
        <div className="absolute bottom-64">
          <MdOutlineSettings
            size={"40px"}
            color="#5e5e5e"
            onClick={toggleSidebar}
          />
        </div>
        <Sidebar
          onOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />
        <Footer />
      </div>
    </div>
  );
}
