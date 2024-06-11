import React from "react";
import Dropdown from "./Dropdown";

const Table = () => {

  return (
    <section className="max-w-8xl mx-auto px-4 md:px-12 relative">
      <div className="absolute top-52 left-1/2 -translate-x-1/2 -z-10 max-w-[1060px] h-[257px] w-full rounded-full bg-brand-orange blur-[250px]"></div>
      {/*  */}
      <div className="w-full h-full bg-main backdrop-blur-xl border border-brand-black-200 rounded p-3 md:p-4.5 md:pt-6">
        {/* black */}
        <div className="w-full overflow-x-auto h-full bg-xl border border-brand-black-200 rounded p-5">
          <div className="grid grid-cols-7 min-w-[1180px] gap-3.5">
            {restaurants.map(res => (
              <div key={res.id} className="flex flex-col gap-3.5 pt-2.5">
                {/* head */}
                <button className="flex items-center justify-between px-1.5">
                  <span className="costum-text text-sm whitespace-nowrap">{res.head}</span>
                  <Dropdown />
                </button>
                {/* inout */}
                <div className="relative h-8 ">
                  {res.input && <div className="w-full h-full border border-brand-black-200 bg-main rounded">
                    <input className="absolute text-xs size-full left-2.5 right-2.5 outline-none border-none bg-transparent" type="text" placeholder={res.input.placeholder} />
                    </div>}
                </div>
                {/* content */}
                <div className="min-h-[460px] flex flex-col justify-between bg-main border border-brand-black-200 rounded py-6 px-3">
                  {res.items.map((i,idx) => (
                    <p key={idx} className="text-sm text-center text-nowrap">{i.item}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Table;

const restaurants = [
  {
    id: 1,
    head: "Restaurant",
    input: {
      placeholder: "Search..."
    },
    items: Array(10).fill({
      item: "Restaurant Name"
    })
  },
  {
    id: 2,
    head: "Neighborhood",
    input: {
      placeholder: "e.g. Soho"
    },
    items: Array(10).fill({
      item: "West Village"
    })
  },
  {
    id: 3,
    head: "Cuisine",
    input: {
      placeholder: "e.g. Italian"
    },
    items: Array(10).fill({
      item: "Steakhouse"
    })
  },
  {
    id: 4,
    head: "Platform",
    input: {
      placeholder: "e.g. Resy"
    },
    items: Array(10).fill({
      item: "Resy"
    })
  },
  {
    id: 5,
    head: "Days",
    input: {
      placeholder: "Min Days"
    },
    items: Array(10).fill({
      item: "6"
    })
  },
  {
    id: 6,
    head: "Time (EST)",
    input: {
      placeholder: "e.g. 9:00 AM"
    },
    items: Array(10).fill({
      item: "9:00 AM"
    })
  },
  {
    id: 7,
    head: "Latest Open RSVP",
    items: Array(10).fill({
      item: "Monday, 06/10/2024"
    })
  }
]