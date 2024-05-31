import React, { createContext, useState } from 'react'


const newcontext=createContext()


function ContextProvider({children}) {
   
    const [first, setfirst] = useState("Enjoy")
    const [name,setname] = useState({Name:"Jhon",Age:35})
    const [car, setcar] = useState([{name:"BMW",color:"white"},{name:"AUDI",color:"black"}])
 
    return (
   
    <div>
<newcontext.Provider value={{first,setfirst,name,setname,car,setcar}}>
            {children}
        </newcontext.Provider>
    </div>
  )
}


export default ContextProvider
export {newcontext}
