import './App.css';
import Navbar from './components/Navbar';
import Revenues from './components/Revenues';
import Deals from './components/Deals';
import NavLayout from './layouts/NavLayout';
import Quarter from './components/Quarter';
import Customers from './components/Customers';
import Graph from './components/Graph';
import Toplist from './components/TopList';
import Chats from './components/Chats';
import TopStates from './components/TopStates';
import NewDeals from './components/NewDeals';

function App() {
  return (
    <>
      <NavLayout>
        <Navbar />
      </NavLayout>

      <section className="overflow-y-scroll w-full h-[100vh]">
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
