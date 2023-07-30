// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useEffect, useState } from "react";
import "./App.css";
import Auth from "./components/Auth";
// import { db } from "./config/firebase";
import { getDocs, collection } from "firebase/firestore";
import { db } from "./config/firebase";

function App() {
  const [movieList, setMovieList] = useState([]);

  const moviesCollectionRef = collection(db, "movies");

  useEffect(() => {
    const getMovieList = async () => {
      try {
        const data = await getDocs(moviesCollectionRef);
      } catch (err) {
        console.error(err);
      }
    };
  }, []);

  return (
    <div className="App">
      <Auth />
    </div>
  );
}

export default App;
