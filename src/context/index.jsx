import React, { useState, useEffect } from 'react'
import StaysData from '../context/stays.json'

// Create Context
const StaysContext = React.createContext()

// Create Provider
const StaysProvider = (props) => {
    // Initialize Data
    const [data, setData] = useState([]);

    // Intialize data = true
    const [isLoading, setIsLoading] = useState(true)
    
    const getData = setData(StaysData) 
    console.log(getData)
    return (
        <StaysContext.Provider
            value={{
                data,
                isLoading,
            }}>
            {props.children}
        </StaysContext.Provider>
    )
}

export { StaysProvider, StaysContext }
