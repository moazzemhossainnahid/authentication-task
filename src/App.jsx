
import './App.css'
import NotFound from './Components/Loading/NotFound/NotFound'
import SignIn from './Components/Authentication/SignIn/SignIn'
import { Route, Routes } from 'react-router-dom'
import SignUp from './Components/Authentication/SignUp/SignUp'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
