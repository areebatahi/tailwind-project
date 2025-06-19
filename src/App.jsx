import './App.css'
import Client from './components/Client'
import ClientsSay from './components/ClientsSay'
import Courses from './components/Courses'
import Economy from './components/Economy'
import Footer from './components/Footer'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Teacher from './components/Teacher'


function App() {

  return (
    <>
     <Navbar/>
    <Header/>
     <Economy/>
     <Client/>
     <Teacher/>
    <ClientsSay/>
     <Courses/>
     <Footer/>
    </>
  )
}

export default App
