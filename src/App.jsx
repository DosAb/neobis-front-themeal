import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Books from "./pages/Books"
import Navbar from "./components/Navbar"

function App() {

  return (
<>
    <main>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/books" element={<Books />} />
        </Routes>
    </main>
</>
  )
}

export default App
