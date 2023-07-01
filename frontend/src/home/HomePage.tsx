import Navbar from './Navbar.js'
import MainContent from './MainContent.js'


function HomePage() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <main className="App-main">
        <MainContent />
      </main>
      <footer>

      </footer>
    </div>
  )
}

export default HomePage
