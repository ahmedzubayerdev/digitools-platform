import './App.css'
import Banner from './components/banner/Banner'
import Navbar from './components/header/Navbar'
import Stats from './components/stats/Stats'
import Steps from './components/steps/Steps'

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

        {/* step section  */}
        <Steps></Steps>

      </main>


  
    </>
  )
}

export default App
