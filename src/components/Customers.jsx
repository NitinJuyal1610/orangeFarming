const Customers = () => {
  return (
    <>
      <div className="bg-white w-full h-[28rem] p-2 rounded-3xl ">
        <div className="flex flex-col p-5 items-start justify-between h-full">
          <div className="flex w-full justify-between ">
            <h2 className="text-2xl font-bold mb-[-3rem]">Customers</h2>
            <div className="flex gap-2 ">
              <p className="text-[#454545] font-medium text-sm p-1">
                Sort by Newest
              </p>
              <img src="dropdown.svg" alt="" />
            </div>
          </div>

          <div className="flex flex-col gap-3 w-full">
            <div className="flex gap-5 w-full rounded-lg p-1 hover:bg-[#FFF7E8] group ">
              <img src="p1.svg" alt="" className="rounded-circle w-8 " />
              <div className="flex flex-col items-start">
                <p className="text-md font-bold">Chris Friedkly</p>
                <div className=" w-max text-[0.8rem] ">
                  Supermarket Villanova
                </div>
              </div>

              <div className="flex gap-3 ml-[4rem] opacity-0 group-hover:opacity-100 ">
                <img src="op1.svg" alt="" />
                <img src="op2.svg" alt="" />
                <img src="op3.svg" alt="" />
                <img src="line.svg" alt="" />
                <img src="op4.svg" alt="" />
              </div>
            </div>

            <div className="flex gap-5 w-full rounded-lg p-1 hover:bg-[#FFF7E8] group">
              <img src="p2.svg" alt="" className="rounded-circle w-8 " />
              <div className="flex flex-col items-start ">
                <p className="text-md font-bold">Maggie Johnson</p>
                <div className=" w-max text-[0.8rem] ">Oasis Organic Inc.</div>
              </div>

              <div className="flex gap-3 ml-[4rem] opacity-0 group-hover:opacity-100 ">
                <img src="op1.svg" alt="" />
                <img src="op2.svg" alt="" />
                <img src="op3.svg" alt="" />
                <img src="line.svg" alt="" />
                <img src="op4.svg" alt="" />
              </div>
            </div>

            <div className="flex gap-5 w-full rounded-lg p-1 hover:bg-[#FFF7E8] group">
              <img src="p3.svg" alt="" className="rounded-circle w-8 " />
              <div className="flex flex-col items-start ">
                <p className="text-md font-bold">Gael Harry</p>
                <div className=" w-max  text-[0.8rem] ">
                  New York Finest Fruits
                </div>
              </div>

              <div className="flex gap-3 ml-[4rem] opacity-0 group-hover:opacity-100 ">
                <img src="op1.svg" alt="" />
                <img src="op2.svg" alt="" />
                <img src="op3.svg" alt="" />
                <img src="line.svg" alt="" />
                <img src="op4.svg" alt="" />
              </div>
            </div>

            <div className="flex gap-5 w-full rounded-lg p-1 hover:bg-[#FFF7E8] group">
              <img src="p4.svg" alt="" className="rounded-circle w-8 " />
              <div className="flex flex-col items-start">
                <p className="text-md font-bold">Jenna Sullivan</p>
                <div className=" w-max text-[0.8rem] ">Walmart</div>
              </div>
              <div className="flex gap-3 ml-[4rem] opacity-0 group-hover:opacity-100">
                <img src="op1.svg" alt="" />
                <img src="op2.svg" alt="" />
                <img src="op3.svg" alt="" />
                <img src="line.svg" alt="" />
                <img src="op4.svg" alt="" />
              </div>
            </div>
          </div>

          <p className="flex  gap-2 text-[#734A00] ">
            All customers
            <img src="arr.svg" alt="->" />{' '}
          </p>
        </div>
      </div>
    </>
  );
};

export default Customers;
