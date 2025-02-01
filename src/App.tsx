import React from 'react';
import Announcement from './sections/Announcement';
import Hero from './sections/hero/Hero';
import ForYou from './sections/foryou/ForYou';
import MaryChina from './sections/marychina/MaryChina';
import WhatClient from './sections/whatclient/WhatClient';
import CoreBenefits from './sections/corebenefits/CoreBenefits';
import StayOrganized from './sections/organized/StayOrganized';
import YourBusiness from './sections/yourbusiness/YourBusiness';
import Footer from './sections/footer/Footer';
import BoostBrand from './sections/boostbrand/BoostBrand';
import Customers from './sections/Customers';
import More from './sections/More';
import Price from './sections/price/Price';
import GetStarted from './sections/getstarted/GetStarted';


function App() {
  return (
    <main className="overflow-x-hidden">
      <Announcement/>
      <Hero/>
      <ForYou/>
      <MaryChina/>
      <WhatClient/>
      <hr className='h-1 w-full' />
      <CoreBenefits/>
      <StayOrganized/>
      <YourBusiness/>
      <BoostBrand />
      <Customers/>
      <Price/>
      <More/>
      <GetStarted/>
      <Footer/>
    </main>
  );
}

export default App;
