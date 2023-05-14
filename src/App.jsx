import { useState } from "react"
import { Routes, Route} from "react-router-dom"
import Header from "./components/Header/Header"
import './index.scss'
import Home from "./pages/Home/Home.jsx";
import MovieDetail from "./pages/MovieDetail/MovieDetail";


function App() {

  const [searchValue, setSearchValue] = useState("")


  return (
    <div className="App">
      <div className="header">
      <Header onSubmit={(inputValue)=> setSearchValue(inputValue) } />
      </div>
      <div className="home">
      <Routes>
        <Route path="/" element={<Home searchValueProp={searchValue} />}/>

        <Route path= "/movie/:id" element={<MovieDetail />}/>
      </Routes>
      </div>

      
       
    </div>
  )
}

export default App
