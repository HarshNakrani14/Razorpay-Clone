import React from 'react';

function Card2() {
  const cardItems = [
    {
      title: 'API & Bulk Payouts',
      description: 'Make multiple payouts with a single click from your dashboard',
      image: 'https://images.unsplash.com/photo-1556742521-9713bf272865?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      title: 'Source to Pay',
      description: 'Control and optimize vendor payments with an integrated payable solution',
      image: 'https://images.unsplash.com/photo-1556742521-9713bf272865?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      title: 'Payout Links',
      description: 'Share payout links for instant payments, no bank details needed',
      image: 'https://images.unsplash.com/photo-1556742521-9713bf272865?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      title: 'Tax Payments',
      description: 'Online tax payments in a single click',
      image: 'https://images.unsplash.com/photo-1556742521-9713bf272865?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <div className='bg-gray-100 p-6 md:p-10 rounded-lg'>
        <h1 className='text-2xl font-medium'>Make Payouts</h1>

        {/* Responsive card layout */}
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

export default Card2;
