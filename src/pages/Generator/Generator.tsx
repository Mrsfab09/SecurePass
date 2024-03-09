import { Toaster, toast } from "sonner";
import { Input } from "../../components/Input/Input";
import { Shadow } from "../../components/Shadow/Shadow";
import { MdOutlineSettings } from "react-icons/md";
import { useState } from "react";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { Footer } from "../../components/Footer/Footer";
import styles from "./Generator.module.css";

export function Generator() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isNull, setIsNull] = useState(false);

  const generatePassword = () => {
    toast.success("Even though the password");
    setIsNull(true);
  };
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={styles.body}>
      <Shadow />
      <Input value={isNull ? "Działa" : ""} />
      <Toaster richColors position="top-center" />
      <div className="flex justify-center align-center mt-48">
        <button
          onClick={generatePassword}
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
            cursor={"pointer"}
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
