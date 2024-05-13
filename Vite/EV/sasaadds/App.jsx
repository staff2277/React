import { useEffect, useState } from "react";
import "./App.css";
import Background from "./Components/Background/Background";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";

function App() {
  let heroData = [
    { text1: "Dive into", text2: "what you love" },

    { text1: "Indulge", text2: "your passions" },

    { text1: "Give into", text2: "your passions" },
  ];

  const [heroCount, setHeroCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(false);

  useEffect(()=>{
    setInterval(()=>{
setHeroCount((count)=>{
  return count === 2 ? 0 : count +1
})
    }, 3000)
  },[])
  return (
    <>
      <Background heroCount={heroCount} playStatus={playStatus} />
      <Navbar />
      <Hero
        setPlayStatus={setPlayStatus}
        playStatus={playStatus}
        setHeroCount={setHeroCount}
        heroCount={heroCount}
        heroData={heroData[heroCount]}
      />
    </>
  );
}

export default App;
