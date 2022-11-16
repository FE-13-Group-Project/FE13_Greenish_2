import React, { createContext, useState } from 'react'
export const contextAuth = createContext()
function LoginAuth({children}) {
    const [user,setUser] = useState({})
  return (
    <contextAuth.Provider value={{user,setUser}}>
        {children}
    </contextAuth.Provider>
  )
}

export default LoginAuth