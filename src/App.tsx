import React from 'react';
import Announcement from './sections/Announcement';
import Hero from './sections/hero/Hero';
import ForYou from './sections/foryou/ForYou';
import MaryChina from './sections/marychina/MaryChina';
import WhatClient from './sections/whatclient/WhatClient';
import CoreBenefits from './sections/corebenefits/CoreBenefits';
import StayOrganized from './sections/organized/StayOrganized';
import YourBusiness from './sections/yourbusiness/YourBusiness';


function App() {
  return (
    <main className="">
      <Announcement/>
      <Hero/>
      <ForYou/>
      <MaryChina/>
      <WhatClient/>
      <hr className='h-1 w-full' />
      <CoreBenefits/>
      <StayOrganized/>
      <YourBusiness/>
    </main>
  );
}

export default App;
