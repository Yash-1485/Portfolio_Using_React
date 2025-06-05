import { useState } from "react";
import LoadingScreen from "./components/LoadingScreen";

function App() {

  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => { setIsLoaded(true) }} />}
      <div className={`min-h-screen bg-black text-gray-100 transition-opacity duration-500 ${isLoaded?"opacity-100":"opacity-0"}`}>
    
      </div>
    </>
  )
}

export default App
