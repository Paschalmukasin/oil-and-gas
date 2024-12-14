
import './App.css'
import Nav from "./component/navbar/Nav"
import Landingpage from "./pages/landingPage/Landingpage"
import Register from "./pages/Register"
import Post from './pages/post'
import {Routes, Route} from 'react-router-dom'
function App() {
  
  return (
    <>
    <Nav/>
   
    <Routes>
      <Route path='/' element={    <Landingpage />} />
      <Route path='/post' element={<Post />} />
      <Route path='/Register' element={<Register />} />
    </Routes>
         
    </>
  )
}

export default App
