export default function NavLayout({ children }) {
  return (
    <div className="flex h-[96vh] w-[26rem] rounded-3xl justify-center bg-white">
      <div className="flex w-full flex-col p-2 ">{children}</div>
    </div>
  );
}
