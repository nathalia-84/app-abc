import Navbar from './Navbar.js'
import MainContent from './MainContent.js'
import Footer from './Footer.js'


function HomePage() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <main className="App-main">
        <MainContent />
      </main>
      <Footer/>
    </div>
  )
}

export default HomePage
