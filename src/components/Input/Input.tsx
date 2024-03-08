interface InputProps {
  value: string;
}

export function Input({ value }: InputProps) {
  return (
    <>
      <div className="flex justify-center align-center mt-48">
        <div className="absolute w-96 bg-inherit p-5 border-slate-400 border-b-4 font-semibold text-2xl focus:outline-none">
          <input
            className="text-slate-500 bg-inherit"
            value={value}
            readOnly
          ></input>
        </div>
      </div>
    </>
  );
}
