import './App.css';
import Navbar from './pages/home/Navbar';
import Revenues from './pages/home/Revenues';
import Deals from './pages/home/Deals';
import NavLayout from './layouts/NavLayout';
import Quarter from './pages/home/Quarter';
import Customers from './pages/home/Customers';
import Graph from './pages/home/Graph';
import Toplist from './pages/home/TopList';
import Chats from './pages/home/Chats';
import TopStates from './pages/home/TopStates';
import NewDeals from './pages/home/NewDeals';

function App() {
  return (
    <>
      <NavLayout>
        <Navbar />
      </NavLayout>

      <section className="overflow-y-scroll w-full p-2 h-[96vh]">
        <div className="grid grid-cols-11  grid-rows-2 gap-4  ">
          <div className="row-span-1 col-span-4 ">
            <Revenues />
          </div>
          <div className="row-span-1  col-span-4">
            <Deals />
          </div>
          <div className="row-span-1 col-span-3">
            <Quarter />
          </div>
          <div className="row-span-2 col-span-5">
            <Customers />
          </div>
          <div className="row-span-1 col-span-6">
            <Graph />
          </div>
          <div className="row-span-1 col-span-6">
            <Toplist />
          </div>
          <div className="row-span-1 col-span-3">
            <Chats />
          </div>
          <div className="row-span-1 col-span-4">
            <TopStates />
          </div>
          <div className="row-span-1 col-span-4">
            <NewDeals />
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
