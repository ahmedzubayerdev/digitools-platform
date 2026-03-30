import './App.css'
import Banner from './components/banner/Banner'
import Navbar from './components/header/Navbar'
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
      </main>


  
    </>
  )
}

export default App
