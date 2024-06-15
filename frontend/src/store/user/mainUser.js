import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';

const MyContext = createContext();

export const UserProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [dataUser, setDataUser] = useState(null);

  const getAllUsers = async () => {
    try {
      const response = await axios.get('http://localhost:4444/api/v1/users');
      const responseData = response.data;
      setData(responseData.data);
    } catch (error) {
      console.error('Błąd pobierania danych z API:', error);
    }
  };

  const getUser = async (id) => {
    try {
      const response = await axios.get(`http://localhost:4444/api/v1/users/${id}`);
      const responseData = response.data;
      setDataUser(responseData); 
      console.log(responseData); 
    } catch (error) {
      console.error('Błąd pobierania danych z API:', error);
    }
  };

  const createUser = async (data) => {
    try {
      const response = await axios.post(`http://localhost:4444/api/v1/users`, data);
      console.log('Utworzone dane:', response.data);
    } catch (error) {
      console.error('Błąd pobierania danych z API:', error);
    }
  };

  const updateUser = async (id, items) => {
    try {
      const response = await axios.patch(`http://localhost:4444/api/v1/users/${id}`, items);
      console.log('Zaktualizowane dane:', response.data);
    } catch (error) {
      console.error('Błąd aktualizacji użytkownika:', error);
    }
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:4444/api/v1/users/${id}`);
    } catch (error) {
      console.error('Błąd usuwania danych z API:', error);
    }
  };

  return (
    <MyContext.Provider
      value={{
        getAllUsers,
        getUser,
        updateUser,
        createUser,
        deleteUser,
        data,
        dataUser,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export const UserContext = () => useContext(MyContext);
