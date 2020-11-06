import React, {useState, useEffect} from 'react';
import './App.css';
import { CatDiv } from './components/CatDiv';
import CatService from "./service/CatService";

function App() {

  const [cat, setCat] = useState({});

  useEffect(() => {
    let catSubscription = CatService.CatObs.subscribe(cat => {
      console.log(cat)
      setCat(cat)});
      getCat();
    return () => {
      catSubscription.unsubscribe();
    }
  }, [])

  const getCat = () => {
    CatService.getCat()
  }

  return (
    <div>
      <header>
        <h1>The cat API</h1>
      </header>
      <main>
        <CatDiv
          catImg={cat.url}
          handleClick={getCat}
        />
      </main>
    </div>
  );
}

export default App;
