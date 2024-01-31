import { CustomerElement } from '../../components/CustomerElement';
import { Dropdown } from '../../components/Icons/Dropdown';
import { people } from '../../utils/mappings';
const Customers = () => {
  return (
    <>
      <div className="bg-white w-full h-[28rem] p-2 rounded-3xl ">
        <div className="flex flex-col p-5 items-start justify-between h-full">
          <div className="flex w-full justify-between ">
            <h2 className="text-2xl font-bold mb-[-3rem]">Customers</h2>
            <div className="flex gap-2 items-center">
              <p className="text-[#454545] font-medium text-sm p-1">
                Sort by Newest
              </p>
              <Dropdown />
            </div>
          </div>

          <div className="flex flex-col gap-3 w-full">
            {people.map((person, index) => (
              <CustomerElement person={person} index={index} key={index} />
            ))}
          </div>

          <p className="flex  gap-2 text-[#734A00] ">
            All customers
            <p>{'->'}</p>
          </p>
        </div>
      </div>
    </>
  );
};

export default Customers;
