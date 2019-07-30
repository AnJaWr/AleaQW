import React, { Component, lazy, Suspense } from "react";
import './App.css';
import './css/bootstrap.min.css'

import { GiDiceEightFacesEight } from 'react-icons/gi';
import Header from "./Header"
import Footer from "./Footer"

const Rolling = lazy(() => import('./Rolling'))

class App extends Component {

  render() {
    return (
      <div className="App">
            <Header />
            <Suspense fallback={<div className="loading"><div className="animation" id="animation"><GiDiceEightFacesEight /></div></div>}>
          <Rolling />
            </Suspense>

            <Footer />
      </div>

    );
  }
}
export default App;
