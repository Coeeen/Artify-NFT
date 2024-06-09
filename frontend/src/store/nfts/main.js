import React, { createContext, useContext, useState } from 'react'
import axios from 'axios'

const MyContext = createContext()

export const UserProvider = ({ children }) => {
  const [data, setData] = useState(null)

  const fetchNfts = async () => {
    try {
      const response = await axios.get('http://localhost:4444/api/v1/nfts')
      setData(response.data)
    } catch (error) {
      console.error('Błąd pobierania danych z API:', error)
    }
  }

  // Inne funkcje manipulujące stanem

  return (
    <MyContext.Provider value={{ data, fetchNfts }}>
      {children}
    </MyContext.Provider>
  )
}

export const useMyContext = () => useContext(MyContext)
