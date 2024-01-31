const Chats = () => {
  return (
    <>
      <div className="bg-white w-full h-[20rem] rounded-3xl p-2 ">
        <div className="flex flex-col p-5 items-start h-full">
          <h2 className="text-2xl font-bold ">Chats</h2>
          <p className="text-[#454545]">2 unread messages</p>

          <div className="flex gap-4 mt-5">
            <img src="c1.svg" alt="" className="rounded-circle w-16" />
            <img src="c2.svg" alt="" className="rounded-circle w-16 " />
            <img src="c3.svg" alt="" className="rounded-circle w-10 " />
            <img src="c4.svg" alt="" className="rounded-circle w-10 " />
          </div>
        </div>
      </div>
    </>
  );
};

export default Chats;
