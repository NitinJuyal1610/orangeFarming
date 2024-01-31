import { offerItems } from '../../utils/mappings.js';
import { Offer } from '../../components/Offer.jsx';

const NewDeals = () => {
  return (
    <>
      <div className="bg-white w-full h-[20rem] rounded-3xl p-2 ">
        <h2 className="text-2xl font-bold mt-5 ">New Deals</h2>

        <div className="flex flex-wrap gap-4 mt-5 w-full">
          {offerItems.map((item) => (
            <Offer key={item.name} name={item.name} />
          ))}
        </div>
      </div>
    </>
  );
};

export default NewDeals;
