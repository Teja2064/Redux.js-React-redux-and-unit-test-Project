import {Component} from 'react'
import {useState} from 'react'

const UserAuth=(wrappedComponent)=>{
    const [userAuthenticated,setUserAunthenticated]= useState(true)
    return(
        <>
        <wrappedComponent userAuthenticated={userAuthenticated}/>
        </>
    )

}

export default UserAuth