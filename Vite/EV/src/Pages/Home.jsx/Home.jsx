import { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Background from "../../components/Background";
import Hero from "../../components/Hero";

const Home = () => {
  const heroData = [
    { text1: "Give into", text2: "your passions" },
    { text1: "Indulge", text2: "your passions" },
    { text1: "Dive into", text2: "what you love" },
  ];

  const [bgCount, setBgCount] = useState(0);
  const [playVideo, setPlayVideo] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgCount((prevState) => (prevState + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  },[])


  return (
    <div>
      <Background bgCount={bgCount} playVideo={playVideo} />
      <Navbar />

      <Hero
        bgCount={bgCount}
        setBgCount={setBgCount}
        playVideo={playVideo}
        setPlayVideo={setPlayVideo}
        heroData={heroData[bgCount]}
      />
    </div>
  );
};

export default Home;
