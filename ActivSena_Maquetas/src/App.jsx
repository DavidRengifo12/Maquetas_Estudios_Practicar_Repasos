
import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Menu from './Menu'
import RateSelector from './Cards/RateSelector'
import Table from './Table/Table'
import FeedbackE from './FeedbackE'

function App() {


  return (
    <>
    
    <BrowserRouter>
    <Menu />
      <Routes>
        <Route path="/" element={<RateSelector />} />
        <Route path='/actividades' element={<Table />} />
        <Route path='/feedback' element={<FeedbackE />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
