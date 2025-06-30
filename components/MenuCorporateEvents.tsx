import React from "react";

const menuItems = Array(8).fill({
  title: "Chicken With Liquid Filling",
  img: "/images/chicken-liquid-filling.jpg",
  desc: "This gourmet dish comes ready to eat, perfect for enjoying with minimal effort. Enjoy this sumptuous dish and serve it to your guests at a party. This delicious delicacy from Ghanaian cuisine is prepared with tender pieces of chicken in a perfect balance of aromatic spices. The subtle yet unique flavor of fenugreek enhances the flavor of the chicken and makes this a truly refreshing and delicious dish."
});

const MenuCorporateEvents = () => (
  <section className="min-h-screen bg-[#181818] bg-cover bg-center flex flex-col items-center py-16" style={{ backgroundImage: "url('/images/blurred-food-bg.jpg')" }}>
    <div className="max-w-4xl w-full px-4">
      <div className="flex flex-col items-center justify-center mb-8 mt-8">
        <h1 className="text-[64px] font-league-gothic uppercase text-white text-center">OUR MENU</h1>
      </div>
      <h2 className="text-[40px] font-roboto text-white text-center mb-2">Corporate Events</h2>
      <p className="text-[24px] font-roboto text-white text-center mb-10">
        Discover the menu we have for you, design the banquet with the perfect flavor to make your celebration an unforgettable experience.
      </p>
      <div className="overflow-y-auto" style={{ maxHeight: '60vh' }}>
        {/* Tarjetas de menú */}
        {menuItems.map((item, idx) => (
          <div key={idx} className="flex bg-[#D9D9D9]/90 rounded-xl shadow-lg mb-8 overflow-hidden">
            <img src={item.img} alt={item.title} className="w-48 h-48 object-cover" />
            <div className="flex-1 p-6 flex flex-col">
              <div className="flex items-center mb-2">
                <h3 className="text-2xl font-roboto text-[#181818] flex-1">{item.title}</h3>
                {/* Logo pequeño decorativo */}
                <img src="/images/logo-bubble-small.svg" alt="Logo" className="w-8 h-8 ml-4" />
              </div>
              <p className="text-[#181818] mb-4 font-roboto text-base">
                {item.desc}
              </p>
              <button className="self-start bg-black text-white text-lg font-roboto uppercase px-8 py-2 rounded border-none hover:bg-[#222] transition">
                ORDER NOW
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default MenuCorporateEvents;
