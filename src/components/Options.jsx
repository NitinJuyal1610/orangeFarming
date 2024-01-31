import { Option1 } from '../components/Icons/Option1';
import { Option2 } from '../components/Icons/Option2';
import { Option3 } from '../components/Icons/Option3';
import { Line } from '../components/Icons/Line';
import { Option4 } from '../components/Icons/Option4';
export const Options = () => (
  <div className="flex gap-3 ml-[4rem] opacity-0 group-hover:opacity-100 items-center ">
    <Option1 />
    <Option2 />
    <Option3 />
    <Line />
    <Option4 />
  </div>
);
