import { useState } from "react";
import Header from "../components/Header";
import Input from "../components/Input";

const App = () => {
  

  return (
    <div className="flex justify-center items-center h-screen ">
      <div className="flex flex-col items-center border-2 border-black w-full ">
        <Header />
        <Input />
        
      </div>
    </div>
  );
};

export default App;
