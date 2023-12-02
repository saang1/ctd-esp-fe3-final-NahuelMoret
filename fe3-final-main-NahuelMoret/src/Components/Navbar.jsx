import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ContextGlobal } from './utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
// local storage para dark light en todas las pags 
const Navbar = () => {

  const { state, actions} = useContext(ContextGlobal) || {};

  
  const handleThemeChange = () => {
    actions.toggleTheme();
  }

  return (
    <nav className={state?.theme === 'dark' ? 'dark-mode' : ''}>

        <h1>Dh Odonto</h1>
        <ul className='nav-ul'>
            <li>
              <Link to='/home'>Home</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
            <li>
              <Link to='/favs'>Favs</Link>
            </li>
            <button onClick={handleThemeChange}>
                Dark/Light
            </button>
        </ul>
        
    </nav>
  )
}

export default Navbar