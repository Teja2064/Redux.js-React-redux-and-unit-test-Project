import {Link}  from 'react-router-dom'
import SubHeader from '../SubHeader/SubHeader'
import axios from "axios"
import {useState,useEffect} from "react"
import Contact from '../Contact/Contact'
import { useDispatch, useSelector } from 'react-redux'
import { asyncFetchContacts } from '../ContactSlice'
import {Loader} from '../Loader/Loader'


const Contacts =()=>{
    // const [contacts, setContacts]= useState([])
    const contacts = useSelector((state)=>state.contactsReducer.contacts)
    const isLoading= useSelector((state)=>state.contactsReducer.isLoading)
    const dispatch = useDispatch()
    useEffect(()=>{
        // axios.get("http://localhost:8000/contacts")
        // .then((res)=>{
        //     console.log(res)
        //     setContacts(res.data)
        // })
        dispatch(asyncFetchContacts())

    },[])

    const deleteContact=(contact)=>
        {
            contacts.forEach((value,index)=>{
                let tempContacts = contacts
                if(value.id === contact.id){
                    tempContacts.splice(index, 1)
                    // setContacts(tempContacts)
                    return
                }
            })
            

        }

    return(
        <div id='contacts'>
        {isLoading ? (<Loader/>
        ):
        <div>(

        {/* {props.userAuthenticated ? */}
         <>
        <SubHeader pageType='contacts'/>
        <div className='flex justify-center'>
            <Link to='/add'>
        <button className='border-blue-900 border p-4 rounded hover:bg-blue-900 hover:text-white' >Add Contact</button>
        </Link>
        </div>
        <div className='flex flex-wrap justify-ceneter m-6'>
            {contacts.map((contact)=>{
                return(
                <Contact  contact={contact} updateContactsAfterDel={deleteContact} key={contact.id}/>
                )
            })}
            </div>
            
        
        </>
        {/* : 'User is not Authenticated'} */}
        )</div>}
        </div>
        
    )

}
export default Contacts