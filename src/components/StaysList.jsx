import React, { useContext } from 'react'
import { StaysContext } from '../context'

const StaysList = () => {

    const appContext = useContext(StaysContext)
    console.log(appContext)
    return (
        <h6>??</h6>
    )
}

export default StaysList
