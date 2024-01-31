import { Hike } from '../../components/Icons/Hike';
const Revenues = () => {
  return (
    <>
      <div className="bg-white w-full  h-[18rem] p-2 rounded-3xl ">
        <div className="flex flex-col p-5 items-start justify-between h-full">
          <h2 className="text-2xl font-bold mb-[-3rem]">Revenues</h2>
          <div>
            <div className="flex mb-2 items-center">
              <p className="font-lg text-5xl font-black">15%</p>
              <Hike />
            </div>

            <p className="text-[#454545]">Increase compared to last week</p>
          </div>

          <p className="flex  gap-2 text-[#734A00] items-center ">
            Revenues report
            <p className="text-lg">{'->'}</p>
          </p>
        </div>
      </div>
    </>
  );
};

export default Revenues;
