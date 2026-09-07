import { Card } from './components/Card'
import { CARDS_CONFIG } from './constants/cardsData'

import './App.css'
import { Header } from './components/Header'
import { About } from './pages/About'
import { Characters } from './pages/Characters'
import { Facts } from './pages/Facts'
import { Info } from './pages/Info'

function App() {

  return (
    <>
      <div className='bg-grey-100'>
        <Header/>
        <About/>
        <Characters/>
        <Facts/>
        <Info/>
      </div>

    </>
  )
}

export default App
