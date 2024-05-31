import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navigation from './Navigation'
import Mapcarousel from './Mapcarousel'
import Sample from './Sample'
import Map11 from './Map11'

function Router2() {
  return (
    <div>
<BrowserRouter>
<Routes>

<Route path='/' element={<><Navigation/><Mapcarousel/></>}/>
<Route path='/about' element={<><Sample/></>}/>
<Route path='/home' element={<Map11/>}/>
<Route path='/sample' element={<Sample/>}/>

</Routes>
</BrowserRouter>






    </div>
  )
}

export default Router2