const Toplist = () => {
  return (
    <>
      <div className="w-full h-[9rem] rounded-3xl ">
        <div className="flex flex items-start gap-4 h-full">
          <div className="flex w-1/3 flex-col bg-white h-full p-6 rounded-3xl items-start ">
            <p className="text-[#7D7D7D] font-semibold">Top month</p>
            <h1 className="text-2xl text-[#734A00] font-bold mt-6">November</h1>
            <p className="text-[#FFA500]">2019</p>
          </div>

          <div className="flex w-1/3  flex-col bg-white h-full p-6 rounded-3xl items-start ">
            <p className="text-[#7D7D7D] font-semibold">Top year</p>
            <h1 className="text-2xl text-[#734A00] font-bold mt-6">2023</h1>
            <p className="text-md text-[#454545]">96K sold so far</p>
          </div>

          <div className="flex w-1/3 flex-col bg-white h-full p-6 rounded-3xl items-start ">
            <p className="text-[#7D7D7D] font-semibold">Top buyer</p>
            <img src="p2.svg" alt="" className="rounded-circle w-5 mt-6 " />
            <div className="flex flex-col items-start ">
              <p className="text-sm font-bold">Maggie Johnson</p>
              <div className=" w-max text-[0.7rem] ">Oasis Organic Inc.</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Toplist;
