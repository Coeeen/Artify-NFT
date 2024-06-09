import React, { createContext, useContext, useState } from 'react'
import axios from 'axios'

const MyContext = createContext()

export const NftsProvider = ({ children }) => {
  const [data, setData] = useState(null)
  const [dataNormal, setDataNormal] = useState(null)
  const [dataPuppy, setDataPuppy] = useState(null)
  const [dataMonkey, setDataMonkey] = useState(null)
  const [dataMonsters, setDataMonsters] = useState(null)
  const [dataNft, setDataNft] = useState(null)

  const fetchAllNfts = async () => {
    try {
      const response = await axios.get('http://localhost:4444/api/v1/nfts')
      const responseData = response.data
      setDataNormal(responseData.results)
      console.log(dataNormal)
    } catch (error) {
      console.error('Błąd pobierania danych z API:', error)
    }
  }

  const fetchNfts = async () => {
    try {
      const response = await axios.get(
        'http://localhost:4444/api/v1/nfts/normal',
      )
      const responseData = response.data
      setDataNormal(responseData.results)
      console.log(dataNormal)
    } catch (error) {
      console.error('Błąd pobierania danych z API:', error)
    }
  }

  const fetchMonsters = async () => {
    try {
      const response = await axios.get(
        'http://localhost:4444/api/v1/nfts/monsters',
      )
      const responseData = response.data
      setDataMonsters(responseData.results)
      console.log(dataMonsters)
    } catch (error) {
      console.error('Błąd pobierania danych z API:', error)
    }
  }

  const fetchMonkeys = async () => {
    try {
      const response = await axios.get(
        'http://localhost:4444/api/v1/nfts/monkey',
      )
      const responseData = response.data
      setDataMonkey(responseData.results)
      console.log(dataMonkey)
    } catch (error) {
      console.error('Błąd pobierania danych z API:', error)
    }
  }

  const fetchPuppies = async () => {
    try {
      const response = await axios.get(
        'http://localhost:4444/api/v1/nfts/puppies',
      )
      const responseData = response.data
      setDataPuppy(responseData.results)
      console.log(dataPuppy)
    } catch (error) {
      console.error('Błąd pobierania danych z API:', error)
    }
  }

  const fetchNft = async (id) => {
    try {
      const response = await axios.get(
        `http://localhost:4444/api/v1/nfts/${id}`,
      )
      const responseData = response.data
      setDataNft(responseData.results)
      console.log(dataNft)
    } catch (error) {
      console.error('Błąd pobierania danych z API:', error)
    }
  }

  const fetchRandomNfts = async (id) => {
    try {
      const response = await axios.get(
        `http://localhost:4444/api/v1/nfts/random`,
      )
      const responseData = response.data
      setData(responseData.results)
      console.log(data)
    } catch (error) {
      console.error('Błąd pobierania danych z API:', error)
    }
  }

  return (
    <MyContext.Provider
      value={{
        dataNormal,
        dataPuppy,
        dataMonkey,
        dataMonsters,
        dataNft,
        data,
        fetchNfts,
        fetchMonkeys,
        fetchMonsters,
        fetchPuppies,
        fetchNft,
        fetchRandomNfts,
      }}
    >
      {children}
    </MyContext.Provider>
  )
}

export const useMyContext = () => useContext(MyContext)
