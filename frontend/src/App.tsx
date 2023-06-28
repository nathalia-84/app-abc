import Navbar from './Navbar.tsx'
import MainContent from './MainContent.tsx'


function App() {
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

export default App
