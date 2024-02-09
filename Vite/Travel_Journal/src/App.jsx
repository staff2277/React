import React, { useState } from 'react'
import Header from '../components/Header'
import Log from '../components/Log'
import './App.css'
import data from "../components/data.jsx"


function App() {
  const logs = data().map(value => {
    return <Log 
      key = {value.key} 
      {...value}
    />
});

  return (
    <div className='body'>
    <Header />
    {logs}
    </div>
  )
}

export default App


/* <Log 
      image ="img1.png"
      country = "Japan"
      destination = "Mount Fuji"
      date = "12 Jan, 2021 - 24 Jan, 2021"
      description = "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters 12,380 feet. Mount Fuji is the single most popular tourist site in Japan, for both japanese and foreign tourist"
    />
    <Log 
      image = "img2.png"
      country= "Australia"
      destination= "Sydney Opera House"
      date= "27 May, 2021 - 8 Jun, 2021"
      description= "The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the banks of the Sydney Harbour, it is often regarded as one of the 20th century's most famous and distinctive buildings"
    />
    <Log 
      image= "img3.png"
      country= "Norway"
      destination= "Geirangerfjord"
      date= "01 Oct, 2021 - 18 Nov, 2021"
      description= "The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway. It is located entirely in the Stranda Municipality."
    /> */