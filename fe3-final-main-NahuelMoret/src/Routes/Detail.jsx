import React, { useContext, useEffect, useState } from 'react'
import { ContextGlobal } from '../Components/utils/global.context';
import { useParams } from 'react-router';



const Detail = () => {
  const { state } = useContext(ContextGlobal) || {};

  const { id } = useParams();
  const [dentistDetails, setDentistDetails] = useState(null);
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  useEffect(() => {
    // Fetch details for the specific dentist using the 'id' parameter
    const fetchDentistDetails = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch dentist details");
        }
        const dentist = await response.json();
        setDentistDetails(dentist);
      } catch (error) {
        console.error("Error fetching dentist details:", error);
      }
    };

    fetchDentistDetails();
  }, [id]);


  return (
    <div className={state?.theme === "dark" ? "dark-mode" : ""}>
      {dentistDetails ? (
        <>
          <h1>{dentistDetails.name}</h1>
          <p>Email: {dentistDetails.email}</p>
          <p>Telefono: {dentistDetails.phone}</p>
          <p>Sitio web: {dentistDetails.website}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Detail