import React from 'react';

function Card5() {
  const cardItems = [
    {
      title: 'Instant Settlements',
      description: "Get Customer payments in your bank account instantly",
      image: 'https://images.unsplash.com/photo-1556742521-9713bf272865?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    }
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <div className='bg-gray-100 p-6 md:p-10 rounded-lg'>
        <h1 className='text-2xl font-medium'>Get Credit & Loans</h1>
        
        <div className='mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
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
                <p className='font-semibold my-3 text-sm md:text-base'>{card.title}</p>
                <p className='text-xs'>{card.description}</p>
              </div>
            </div>
          ))}

          {/* Empty divs to fill remaining grid columns */}
          {[...Array(4 - cardItems.length)].map((_, index) => (
            <div key={index} className='bg-gray-100 rounded-md'></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Card5;
