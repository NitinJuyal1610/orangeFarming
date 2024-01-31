import { Chart } from '../../components/Chart';

const Graph = () => {
  return (
    <>
      <div className="bg-white w-full  h-[18rem] p-2 rounded-3xl ">
        <div className="flex flex-col  items-start justify-between h-full">
          <h2 className="text-2xl font-bold p-5 mb-[-3rem]">Growth</h2>
          <div className="w-full h-4/5">
            <Chart />
          </div>
        </div>
      </div>
    </>
  );
};

export default Graph;
