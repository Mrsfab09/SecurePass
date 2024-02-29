import { Input } from "../../components/Input/Input";
import { Shadow } from "../../components/Shadow/Shadow";

export function Generator() {
  return (
    <>
      <Shadow />
      <Input />
      <div className="flex justify-center align-center mt-48">
        <button className="absolute w-32 bg-buttonColorGenerate rounded-lg p-3 text-white text-xl font-semibold z-10 hover:bg-buttonColorHoverG">
          Generate
        </button>
        <span className="relative w-32 bg-buttonColor2 rounded-lg p-3 mt-9 z-1"></span>
      </div>
    </>
  );
}
