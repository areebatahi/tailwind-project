import './App.css'
import Client from './assets/components/Client'
import ClientsSay from './assets/components/clientsSay'
import Courses from './assets/components/Courses'
import Economy from './assets/components/Economy'
import Footer from './assets/components/Footer'
import Header from './assets/components/Header'
import Navbar from './assets/components/Navbar'
import Teacher from './assets/components/Teacher'

function App() {

  return (
    <>
     <Navbar />
     <Header />
     <Economy />
     <Client />
     <Teacher />
     <ClientsSay/>
     <Courses />
     <Footer />
    </>
  )
}

export default App
