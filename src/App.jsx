import './App.css'
import Banner from './components/banner/Banner'
import Navbar from './components/header/Navbar'
import Stats from './components/stats/Stats'
function App() {

  return (
    <>
      {/* header section */}
      <header>
        <Navbar></Navbar> 
      </header>
      {/* main section */}
      <main>
        {/* banner section */}
        <Banner></Banner>
        {/* stats section */}
        <Stats></Stats>


        something will be here
      </main>


  
    </>
  )
}

export default App
