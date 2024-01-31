import { Chart } from '../../components/Chart';

import { useState } from 'react';
const Graph = () => {
  const [year, setYear] = useState('');
  return (
    <>
      <div className="bg-white w-full  h-[18rem] p-2 rounded-3xl ">
        <div className="flex flex-col  items-start justify-between h-full">
          <div className="flex gap-5 justify-between items-center w-full ">
            <h2 className="text-2xl font-bold p-5  ">Growth</h2>
            <div className=" h-[17px] flex items-center gap-1 mt-1 ">
              <select
                onChange={(e) => setYear(e.target.value)}
                className="text-[#454545] font-inter text-[14px] font-normal leading-normal tracking-[-0.3px]"
              >
                <option value="">Yearly</option>
                <option value="2016">2016</option>
                <option value="2017">2017</option>
                <option value="2018">2018</option>
              </select>
            </div>
          </div>

          <div className="w-full h-4/5">
            <Chart year={year} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Graph;
