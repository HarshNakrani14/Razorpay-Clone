import React, { useState } from 'react';

function Card1() {
  const [activeIndex, setActiveIndex] = useState(0);

  const menuItems = [
    'Top Products',
    'On Website/App',
    'Plugins',
    'On Social Media',
    'In-Store',
    'Cross Border',
    'With Smart Ad-Ons',
  ];

  const cardItems = [
    {
      title: 'Payment Gateway',
      description: 'Offer a seamless payment experience on your website or app',
      image: 'https://images.unsplash.com/photo-1556742521-9713bf272865?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      title: 'Payment Button',
      description: 'Effortlessly add a Pay Now button without any coding required.',
      image: 'https://images.unsplash.com/photo-1556742521-9713bf272865?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      title: 'Payment Links',
      description: 'Create and share links over email, text, and social to accept payments instantly',
      image: 'https://images.unsplash.com/photo-1556742521-9713bf272865?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      title: 'Razorpay POS',
      description: 'Accept seamless in-store payments with India\'s best POS solution',
      image: 'https://images.unsplash.com/photo-1556742521-9713bf272865?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto rounded-lg">
      <div className='bg-gray-100 p-6 md:p-10 rounded-lg'>
        <h1 className='text-2xl font-medium'>Accept Payments</h1>
        <nav>
          <ul className='flex gap-4 pt-6 text-sm font-semibold text-gray-500 flex-wrap'>
            {menuItems.map((item, index) => (
              <li
                key={index}
                className={`cursor-pointer hover:text-black ${activeIndex === index ? 'text-black border-b-2 border-green-500' : ''}`}
                onClick={() => setActiveIndex(index)}
              >
                {item}
              </li>
            ))}
          </ul>
          <hr />
        </nav>
        <div className='mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4'>
          {cardItems.map((card, index) => (
            <div key={index} className='bg-gray-200 rounded-md overflow-hidden'>
              <div className='h-40 sm:h-48 md:h-64 w-full overflow-hidden'>
                <img
                  src={card.image}
                  alt={card.title}
                  className='h-full w-full object-cover'
                />
              </div>
              <div className='p-4'>
                <p className='font-semibold my-2 text-sm md:text-base'>{card.title}</p>
                <p className='text-xs'>{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Card1;
