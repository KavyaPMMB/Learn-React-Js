import React from 'react'
import Navigation from './Navigation'
import DummyApiCard from './DummyApiCard'
import Sample from './Sample'
import Sample44 from './Sample44'
import ReactIcon from './ReactIcon'
import Useparams from './Useparams'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DummyApiCarousel from './DummyApiCarousel'

function Router1() {
  return (
    <div>
         <BrowserRouter>
        
         <Routes>
            <Route path='/' element={<><Navigation/><DummyApiCard/></>}/>
            <Route path='/home'  element={<><DummyApiCarousel/></>}/>
            <Route path='/sample' element={<><ReactIcon/></>}/>
            <Route path='/profile/:username' element={<Useparams/>}/>

         </Routes>
         </BrowserRouter>
         


    </div>
  )
}

export default Router1