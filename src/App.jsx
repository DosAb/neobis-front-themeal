import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Books from "./pages/Books"
import Navbar from "./components/Navbar"
import Detail from "./pages/Detail"

function App() {

  return (
<>
    <main>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/books" element={<Books />} />
            <Route path="/:id" element={<Detail />} />
        </Routes>
    </main>
</>
  )
}

export default App
