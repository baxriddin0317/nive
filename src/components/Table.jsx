import React, { useState } from "react";
import tableData from "../lib/table.json"
import { SortIcon } from "./icons";
 
const Table = () => {
  const [restaurantSearch, setRestaurantSearch] = useState('');
  const [neighborhoodSearch, setNeighborhoodSearch] = useState('');
  const [cuisineSearch, setCuisineSearch] = useState('');
  const [platformSearch, setPlatformSearch] = useState('');
  const [daysInAdvanceSearch, setDaysInAdvanceSearch] = useState('');
  const [timeSearch, setTimeSearch] = useState('');

  const [sortConfig, setSortConfig] = useState(null);

  const sortedData = [...tableData].sort((a, b) => {
    if (!sortConfig) return 0;
    const { key, direction } = sortConfig;
    if (a[key] < b[key]) return direction === 'asc' ? -1 : 1;
    if (a[key] > b[key]) return direction === 'asc' ? 1 : -1;
    return 0;
  });

  const filteredData = sortedData.filter(item =>
    item.restaurant.toLowerCase().includes(restaurantSearch.toLowerCase()) &&
    item.neighborhood.toLowerCase().includes(neighborhoodSearch.toLowerCase()) &&
    item.cuisine.toLowerCase().includes(cuisineSearch.toLowerCase()) &&
    item.platform.toLowerCase().includes(platformSearch.toLowerCase()) &&
    item.daysInAdvance.toString().includes(daysInAdvanceSearch) &&
    item.time.toLowerCase().includes(timeSearch.toLowerCase())
  );

  const requestSort = (key) => {
    let direction = 'asc';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };
  return (
    <section className="max-w-8xl mx-auto px-4 md:px-12 relative">
      <div className="absolute top-52 left-1/2 -translate-x-1/2 -z-10 max-w-[1060px] h-[257px] w-full rounded-full bg-brand-orange blur-[250px]"></div>
      {/*  */}
      <div className="w-full h-full bg-main backdrop-blur-xl border border-brand-black-200 rounded p-3 md:p-4.5 md:pt-6">
        {/* black */}
        <div className="w-full overflow-auto h-full bg-xl border border-brand-black-200 rounded p-5">
          <div className="relative max-h-[545px] overflow-auto">
            <table className="min-w-[1180px] w-full bg-transparent">
              <thead className="sticky w-full border border-brand-black-100 top-0 !bg-brand-black-100 z-30">
                <tr>
                  <th className="py-3.5 px-1.5 space-y-3.5">
                    <button className="flex w-full items-center justify-between px-1.5">
                      <span className="costum-text text-sm whitespace-nowrap">Restaurant</span>
                      <button onClick={() => requestSort('restaurant')}>
                        <SortIcon />
                      </button>
                    </button>
                    <div className="relative h-8 mb-3.5">
                      <div className="w-full h-full border border-brand-black-200 bg-main rounded">
                        <input 
                          className="absolute text-xs size-full left-2.5 right-2.5 outline-none border-none bg-transparent" 
                          type="text" 
                          value={restaurantSearch}
                          onChange={e => setRestaurantSearch(e.target.value)} 
                          placeholder="Search..."
                        />
                      </div>
                    </div>
                  </th>
                  <th className="py-3.5 px-1.5 space-y-3.5">
                    <button className="flex w-full gap-2 items-center justify-between px-1.5">
                      <span className="costum-text text-sm whitespace-nowrap">Neighborhood</span>
                      <button onClick={() => requestSort('neighborhood')}>
                        <SortIcon />
                      </button>
                    </button>
                    <div className="relative h-8 mb-3.5">
                      <div className="w-full h-full border border-brand-black-200 bg-main rounded">
                        <input 
                          className="absolute text-xs size-full left-2.5 right-2.5 outline-none border-none bg-transparent" 
                          type="text" 
                          value={neighborhoodSearch}
                          onChange={e => setNeighborhoodSearch(e.target.value)}
                          placeholder="e.g. Soho"
                        />
                      </div>
                    </div>
                  </th>
                  <th className="py-3.5 px-1.5 space-y-3.5">
                    <button className="flex w-full gap-2 items-center justify-between px-1.5">
                      <span className="costum-text text-sm whitespace-nowrap">Cuisine</span>
                      <button onClick={() => requestSort('cuisine')}>
                        <SortIcon />
                      </button>
                    </button>
                    <div className="relative h-8 mb-3.5">
                      <div className="w-full h-full border border-brand-black-200 bg-main rounded">
                        <input 
                          className="absolute text-xs size-full left-2.5 right-2.5 outline-none border-none bg-transparent" 
                          type="text" 
                          value={cuisineSearch}
                          onChange={e => setCuisineSearch(e.target.value)}
                          placeholder="e.g. Italian"
                        />
                      </div>
                    </div>
                  </th>
                  <th className="py-3.5 px-1.5 space-y-3.5">
                    <button className="flex w-full gap-2 items-center justify-between px-1.5">
                      <span className="costum-text text-sm whitespace-nowrap">Platform</span>
                      <button onClick={() => requestSort('platform')}>
                        <SortIcon />
                      </button>
                    </button>
                    <div className="relative h-8 mb-3.5">
                      <div className="w-full h-full border border-brand-black-200 bg-main rounded">
                        <input 
                          className="absolute text-xs size-full left-2.5 right-2.5 outline-none border-none bg-transparent" 
                          type="text" 
                          value={platformSearch}
                          onChange={e => setPlatformSearch(e.target.value)}
                          placeholder="e.g. Resy"
                        />
                      </div>
                    </div>
                  </th>
                  <th className="py-3.5 px-1.5 space-y-3.5">
                    <button className="flex w-full gap-2 items-center justify-between px-1.5">
                      <span className="costum-text text-sm whitespace-nowrap">Days in Advance</span>
                      <button onClick={() => requestSort('daysInAdvance')}>
                        <SortIcon />
                      </button>
                    </button>
                    <div className="relative h-8 mb-3.5">
                      <div className="w-full h-full border border-brand-black-200 bg-main rounded">
                        <input 
                          className="absolute text-xs size-full left-2.5 right-2.5 outline-none border-none bg-transparent" 
                          type="text" 
                          value={daysInAdvanceSearch}
                          onChange={e => setDaysInAdvanceSearch(e.target.value)}
                          placeholder="e.g. Resy"
                        />
                      </div>
                    </div>
                  </th>
                  <th className="py-3.5 px-1.5 space-y-3.5">
                    <button className="flex w-full gap-2 items-center justify-between px-1.5">
                      <span className="costum-text text-sm whitespace-nowrap">Time (EST)</span>
                      <button onClick={() => requestSort('time')}>
                        <SortIcon />
                      </button>
                    </button>
                    <div className="relative h-8 mb-3.5">
                      <div className="w-full h-full border border-brand-black-200 bg-main rounded">
                        <input 
                          className="absolute text-xs size-full left-2.5 right-2.5 outline-none border-none bg-transparent" 
                          type="text" 
                          value={timeSearch}
                          onChange={e => setTimeSearch(e.target.value)}
                          placeholder="e.g. Resy"
                        />
                      </div>
                    </div>
                  </th>
                  <th className="py-3.5 px-1.5 space-y-3.5">
                    <button className="flex w-full gap-2 items-center justify-between px-1.5">
                      <span className="costum-text text-sm whitespace-nowrap">Latest Open RSVP</span>
                      <button onClick={() => requestSort('latestOpenRSVP')}>
                        <SortIcon />
                      </button>
                    </button>
                    <div className="relative h-8 mb-3.5"></div>
                  </th>
                </tr>
              </thead>
              <tbody className="">
                {filteredData.map((item, index) => (
                    <tr key={index} className="relative h-11">
                      <td className={`text-sm text-center relative before:absolute before:left-1/2 before:-translate-x-1/2 px-2 before:top-0 before:w-[90%] before:h-full before:bg-main ${index == 0 ? 'before:border-t before:border-x before:rounded-t' : 'before:border-x'} ${index == filteredData.length-1 && 'before:border-b before:rounded-b'} before:border-brand-black-200`}>
                        <a href="#">{item.restaurant}</a>
                      </td>
                      <td className={`text-sm text-center relative before:absolute before:left-1/2 before:-translate-x-1/2 px-2 before:top-0 before:w-[90%] before:h-full before:bg-main ${index == 0 ? 'before:border-t before:border-x before:rounded-t' : 'before:border-x'} ${index == filteredData.length-1 && 'before:border-b before:rounded-b'} before:border-brand-black-200`}>{item.neighborhood}</td>
                      <td className={`text-sm text-center relative before:absolute before:left-1/2 before:-translate-x-1/2 px-2 before:top-0 before:w-[90%] before:h-full before:bg-main ${index == 0 ? 'before:border-t before:border-x before:rounded-t' : 'before:border-x'} ${index == filteredData.length-1 && 'before:border-b before:rounded-b'} before:border-brand-black-200`}>{item.cuisine}</td>
                      <td className={`text-sm text-center relative before:absolute before:left-1/2 before:-translate-x-1/2 px-2 before:top-0 before:w-[90%] before:h-full before:bg-main ${index == 0 ? 'before:border-t before:border-x before:rounded-t' : 'before:border-x'} ${index == filteredData.length-1 && 'before:border-b before:rounded-b'} before:border-brand-black-200`}>
                        <a href="#">{item.platform}</a>
                      </td>
                      <td className={`text-sm text-center relative before:absolute before:left-1/2 before:-translate-x-1/2 px-2 before:top-0 before:w-[90%] before:h-full before:bg-main ${index == 0 ? 'before:border-t before:border-x before:rounded-t' : 'before:border-x'} ${index == filteredData.length-1 && 'before:border-b before:rounded-b'} before:border-brand-black-200`}>{item.daysInAdvance}</td>
                      <td className={`text-sm text-center relative before:absolute before:left-1/2 before:-translate-x-1/2 px-2 before:top-0 before:w-[90%] before:h-full before:bg-main ${index == 0 ? 'before:border-t before:border-x before:rounded-t' : 'before:border-x'} ${index == filteredData.length-1 && 'before:border-b before:rounded-b'} before:border-brand-black-200`}>{item.time}</td>
                      <td className={`text-sm text-center relative before:absolute before:left-1/2 before:-translate-x-1/2 px-2 before:top-0 before:w-[90%] before:h-full before:bg-main ${index == 0 ? 'before:border-t before:border-x before:rounded-t' : 'before:border-x'} ${index == filteredData.length-1 && 'before:border-b before:rounded-b'} before:border-brand-black-200`}>{item.latestOpenRSVP}</td>
                    </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Table;