import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

// import { useContext } from 'react'
// import { ThemeContext } from './contexts/theme.context'

import AppRoutes from './routes/AppRoutes'
import Navigation from './components/Navigation/Navigation'
import Footer from './components/Footer/Footer'


const App = () => {
  // const { themeValue } = useContext(ThemeContext)

  

  return (
    <div className='App'>

      <Navigation />

      <AppRoutes />

      <Footer />

    </div>
  )
}

export default App

