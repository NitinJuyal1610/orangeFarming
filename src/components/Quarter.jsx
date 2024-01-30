const Quarter = () => {
  return (
    <>
      <div className="bg-white w-full  h-[18rem] p-2 rounded-3xl ">
        <div className="flex flex-col p-5 items-start justify-between h-full">
          <h2 className="text-2xl self-center font-bold mb-[-4rem]">
            Quarter goal
          </h2>
          <div className=" self-center mt-8">
            <img src="progress.svg" alt="" className="w-max" />
          </div>

          <p className="flex self-center gap-2 text-[#734A00] ">
            All goals
            <img src="arr.svg" alt="->" />{' '}
          </p>
        </div>
      </div>
    </>
  );
};

export default Quarter;
