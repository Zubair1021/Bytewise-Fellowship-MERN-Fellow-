
import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Homecard from './Components/Homecard';
import JobListings from './Components/JobListings';
import ViewAllJobs from './Components/ViewAllJobs';

import React from 'react'

const App = () => {
  return (
    <section>
      <Navbar />
      <Hero />
      <Homecard />
      <JobListings />
      <ViewAllJobs />
      </section>
  )
}

export default App
