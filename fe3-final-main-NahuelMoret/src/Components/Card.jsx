import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextGlobal } from "./utils/global.context";


const Card = ({user}) => {
  const { actions } = useContext(ContextGlobal);

  
  const addFav = (id) => {
    actions.toggleFavorite(id);
};

  
  

  return (
    <div className="container">
      {/* En cada card deberán mostrar el nombre, el nombre de usuario y el id */}
        <div key={user.id} id={user.id} className="card">
          <Link to={`/dentist/${user.id}`}>
            <img src="./images/doctor.jpg" alt="imagen-doctor" className="card" />
            <h3>{user.name}</h3>
            <p>{user.username}</p>
          </Link>
          <button onClick={() => addFav(user.id)} className="favButton">
            Favorite
          </button>
        </div>
    </div>
  );
};

export default Card;