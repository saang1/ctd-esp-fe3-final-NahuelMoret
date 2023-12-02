import React, { useContext, useEffect, useState } from 'react'
import Card from '../Components/Card'
import { ContextGlobal } from '../Components/utils/global.context';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context


const Home = () => {
  const [allUsers, setAllUsers] = useState([])

  useEffect(() => {
    getAllUsers();
  }, [])
  
  const getAllUsers = async() => {
      const data = await
      fetch('https://jsonplaceholder.typicode.com/users')
      const convert = await data.json()
      console.log(data);
      setAllUsers(convert);
      console.log(setAllUsers);
  }

  const { state } = useContext(ContextGlobal) || {};


  return (
    <main className={state?.theme === 'dark' ? 'dark-mode' : ''}>
      <h1>Home</h1>
      <div className='card-grid'>
        {allUsers.map((user, index) => (
          <Card user={user} key={index}/>
        ))}
      </div>
    </main>
  )
}

export default Home