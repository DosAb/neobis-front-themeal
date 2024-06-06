import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Category from "./pages/Category"
import Favorites from "./pages/Favorites"
import Navbar from "./components/Navbar"
import Detail from "./pages/Detail"

export default function App() {

  return (
<>
    <main>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category" element={<Category />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/:id" element={<Detail />} />
        </Routes>
    </main>
</>
  )
}
