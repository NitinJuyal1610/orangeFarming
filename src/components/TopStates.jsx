const TopStates = () => {
  return (
    <>
      <div className="bg-white w-full h-[20rem] rounded-3xl p-2 ">
        <div className="flex flex-col p-5 items-start h-full">
          <h2 className="text-2xl font-bold ">Top States</h2>

          <div className="flex justify-between gap-4 mt-5 w-full p-2 rounded-md bg-gradient-to-r from-[#FFCD71] to-[rgba(255, 205, 113, 0.2)]">
            <p>NY</p>
            <p>120k</p>
          </div>

          <div className="flex  justify-between gap-4 mt-5 w-4/5 p-2 rounded-md bg-gradient-to-r from-[#FFCD71] to-[rgba(255, 205, 113, 0.2)]">
            <p>MA</p>
            <p>80k</p>
          </div>

          <div className="flex justify-between gap-4 mt-5 w-3/5 p-2 rounded-md bg-gradient-to-r from-[#FFCD71] to-[rgba(255, 205, 113, 0.2)]">
            <p>NH</p>
            <p>70k</p>
          </div>

          <div className="flex justify-between gap-4 mt-5 w-2/5 p-2 rounded-md bg-gradient-to-r from-[#FFCD71] to-[rgba(255, 205, 113, 0.2)]">
            <p>OR</p>
            <p>30k</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopStates;
