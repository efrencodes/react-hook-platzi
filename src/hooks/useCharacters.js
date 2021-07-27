import { useState, useEffect } from "react";

const useCharacters = url => {
    // creo dos variables para los datos y el error
    const [data, setData] = useState([])

    // usamos useEffect para obtener los datos de la API
    // cuando url cambie se llamara de nuevo los datos a la API
    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => setData(data.results))
    }, [url])

    return data
}

export default useCharacters
