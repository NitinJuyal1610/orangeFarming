const Deals = () => {
  return (
    <>
      <div className="bg-white w-full h-[18rem] rounded-3xl p-2 ">
        <div className="flex flex-col p-5 items-start justify-between h-full">
          <h2 className="text-2xl font-bold mb-[-3rem]">Lost Deals</h2>
          <div>
            <div className="flex mb-2">
              <p className="font-lg text-5xl font-black">4%</p>
            </div>

            <p className="text-[#454545]">You closed 96 out of 100 deals</p>
          </div>

          <p className="flex  gap-2 text-[#734A00] items-center">
            All deals
            <p className="text-lg">{'->'}</p>
          </p>
        </div>
      </div>
    </>
  );
};

export default Deals;
