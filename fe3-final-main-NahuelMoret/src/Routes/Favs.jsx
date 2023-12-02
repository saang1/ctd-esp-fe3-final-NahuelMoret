// Favs.js
import React, { useContext, useEffect, useState } from "react";
import { ContextGlobal } from "../Components/utils/global.context";
import Card from "../Components/Card";

const Favs = () => {
  const { state } = useContext(ContextGlobal) || {};

  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/users');
    const convert = await data.json();
    setAllUsers(convert);
  };

  const favoriteUsers = allUsers.filter((user) => state.favorites.includes(user.id));

  return (
    
    <div className={state?.theme === 'dark' ? 'dark-mode' : ''}>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {favoriteUsers.map((user, index) => (
          <Card user={user} key={index}/>
        ))}
      </div>
    </div>
  );
};

export default Favs;
