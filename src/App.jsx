import './App.css'
import Banner from './components/banner/Banner'
import Footer from './components/footer/Footer'
import Navbar from './components/header/Navbar'
import Pricing from './components/pricing/Pricing'
import Stats from './components/stats/Stats'
import Steps from './components/steps/Steps'
import Cards from './components/cards/Cards'
import { Suspense } from 'react'


const fetchCards = async ()=>{
  const res = await fetch('/data.json');
  return res.json();
}


function App() {
    const cardsPromise = fetchCards()
  return (
    <>
      {/* header section */}
      <header >
        <Navbar></Navbar> 
      </header>
      {/* main section */}
      <main >
        {/* banner section */}
        <Banner></Banner>
        {/* stats section */}
        <Stats></Stats>

        <Suspense fallback= {<span className="loading loading-dots loading-xl"></span>}>
          <Cards cardsPromise={cardsPromise}></Cards>
        </Suspense>
        {/* step section  */}
        <Steps></Steps>

        <Pricing></Pricing>

      </main>

      <footer >
        <Footer></Footer>
      </footer>


  
    </>
  )
}

export default App
