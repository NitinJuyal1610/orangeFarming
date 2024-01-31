import { Options } from './Options';

export const CustomerElement = ({ person, index }) => (
  <div className="flex gap-5 w-full rounded-lg p-1 hover:bg-[#FFF7E8] group">
    <img src={`p${index + 1}.svg`} alt="" className="rounded-circle w-8" />
    <div className="flex flex-col items-start">
      <p className="text-md font-bold">{person.name}</p>
      <div className="w-max text-[0.8rem]">{person.company}</div>
    </div>
    <Options />
  </div>
);
