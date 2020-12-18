import React, { useState, useEffect } from 'react'
import { staysData } from '../stays'

// Create Context
const StaysContext = React.createContext()

// Create Provider
const StaysProvider = (props) => {
    // Initialize Data
    const [data, setData] = useState(staysData);

    // Intialize data = true
    const [isLoading, setIsLoading] = useState(true)
    
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
