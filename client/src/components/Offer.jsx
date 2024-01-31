import { Add } from './Icons/Add';

export const Offer = ({ name }) => (
  <div className="col-span-4 bg-[#FFF7E8] flex p-3 items-center rounded-3xl gap-2 w-max">
    <Add />
    <p className="text-[#734A00] text-nowrap text-sm">{name}</p>
  </div>
);
