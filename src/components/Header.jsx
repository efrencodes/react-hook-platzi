import React, { useState } from 'react'

const Header = () => {
    // Constante de destructurar dos elementos
    // Primer:: es el estado
    // Segundo:: es la función que va a cambiar el estado  
    // Podemos setear el estado inicial en useState()
    const [darkMode, setDarkMode] = useState(false)

    const HandleClick = () => {
        // Setear el estado
        setDarkMode(!darkMode)
    }
    return (
        <div className="Header">
            <h1>ReactHooks</h1>
            <button
                type="button"
                onClick={HandleClick}
            >
                {darkMode ? 'Dark Mode' : 'Light Mode'}
            </button>
        </div>
    )
}

export default Header
