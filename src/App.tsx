import './App.css'
import { Appbar } from './components/Appbar'
import { Buffalo } from './components/Buffalo'
import { ChangeRoute } from './components/ChangeRoute'
import { Cow } from './components/Cow'
import { Login } from './components/Login'
import { Signup } from './components/Signup'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <div className='sm:md:w-3/5 sm:md:px-0 px-2 w-full'>
        <Appbar />
        <Routes>
          <Route path='/' element={<ChangeRoute />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/buffalo' element={<Buffalo />} />
          <Route path='/cow' element={<Cow />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
