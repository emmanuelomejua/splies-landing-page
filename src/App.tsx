import React from 'react';
import Announcement from './sections/Announcement';
import Hero from './sections/hero/Hero';
import ForYou from './sections/foryou/ForYou';
import MaryChina from './sections/marychina/MaryChina';
import WhatClient from './sections/whatclient/WhatClient';


function App() {
  return (
    <main className="">
      <Announcement/>
      <Hero/>
      <ForYou/>
      <MaryChina/>
      <WhatClient/>
    </main>
  );
}

export default App;
