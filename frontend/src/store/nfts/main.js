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
  const [dataPopular, setDataPopular] = useState(null)
  const [animalPack, setAnimalPack] = useState(null)
  const [monsterPack, setMonsterPack] = useState(null)

  const fetchAllNfts = async () => {
    try {
      const response = await axios.get('http://localhost:4444/api/v1/nfts')
      const responseData = response.data
      setData(responseData.results)
      console.log(data)
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

  const fetchRandomNfts = async () => {
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

  const fetchMostPopularNfts = async () => {
    try {
      const response = await axios.get(
        `http://localhost:4444/api/v1/nfts/popular`,
      )
      const responseData = response.data
      setDataPopular(responseData.results)
      console.log(dataPopular)
    } catch (error) {
      console.error('Błąd pobierania danych z API:', error)
    }
  }

  const fetchAnimalPackNfts = async () => {
    try {
      const response = await axios.get(
        `http://localhost:4444/api/v1/nfts/popular/animalPack`,
      )
      const responseData = response.data
      setAnimalPack(responseData.results)
      console.log(animalPack)
    } catch (error) {
      console.error('Błąd pobierania danych z API:', error)
    }
  }
  const fetchMonsterPackNfts = async () => {
    try {
      const response = await axios.get(
        `http://localhost:4444/api/v1/nfts/popular/monsterPack`,
      )
      const responseData = response.data
      setMonsterPack(responseData.results)
      console.log(monsterPack)
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

  const updateNFT = async (id) => {
    try {
      const response = await axios.patch(
        `http://localhost:4444/api/v1/nfts/${id}`,
      )
      const responseData = response.data
      setMonsterPack(responseData.results)
      console.log(monsterPack)
    } catch (error) {
      console.error('Błąd pobierania danych z API:', error)
    }
  }

  const deleteNFT = async (id) => {
    try {
      await axios.delete(`http://localhost:4444/api/v1/nfts/${id}`)
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
        animalPack,
        monsterPack,
        dataPopular,
        fetchNfts,
        fetchAllNfts,
        fetchMonkeys,
        fetchMonsters,
        fetchPuppies,
        fetchNft,
        fetchRandomNfts,
        fetchMostPopularNfts,
        fetchAnimalPackNfts,
        fetchMonsterPackNfts,
        deleteNFT,
        updateNFT,
      }}
    >
      {children}
    </MyContext.Provider>
  )
}

export const useMyContext = () => useContext(MyContext)
