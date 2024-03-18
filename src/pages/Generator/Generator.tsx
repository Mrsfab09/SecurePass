import { Toaster, toast } from "sonner";
import { Input } from "../../components/Input/Input";
import { Shadow } from "../../components/Shadow/Shadow";
import { MdOutlineSettings } from "react-icons/md";
import { useEffect, useState } from "react";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import { Footer } from "../../components/Footer/Footer";
import "./Generator.module.css";
import { ThreeDots } from "react-loader-spinner";
import { IoMdArrowRoundBack } from "react-icons/io";

export function Generator() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [password, setPassword] = useState<string>("");

  const generatePassword = (length: number) => {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
    let result = "";
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    setPassword(result);
  };

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(password)
      .then(() => {
        toast.message("✅ Password copied", {
          description: "The password has been copied ",
        });
      })
      .catch((error) => {
        toast.message("❌ Password not copied", {
          description: "The password was not copied ",
        });
        console.log(error);
      });
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 2000);
  }, []);

  return (
    <>
      {!loaded ? (
        <div className="flex justify-center align-center mt-[400px]">
          <ThreeDots
            visible={true}
            height="80"
            width="80"
            color="#5192fcab"
            radius="9"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div>
      ) : (
        <>
          <Shadow />
          <div className="relative ml-40 flex flex-row gap-3">
            <a href="/">
              <IoMdArrowRoundBack size={"35px"} color="#5e5e5e" />
            </a>
          </div>
          <Input value={password} copy={copyToClipboard} />
          <Toaster richColors position="top-center" />
          <div className="flex justify-center align-center mt-48">
            <button
              onClick={() => {
                toast.success("Your password has been generated");
                generatePassword(8);
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
                cursor={"pointer"}
              />
            </div>
            <Sidebar
              onOpen={isSidebarOpen}
              onClose={() => setIsSidebarOpen(false)}
              onChangeLength={generatePassword}
            />
            <Footer />
          </div>
        </>
      )}
    </>
  );
}
