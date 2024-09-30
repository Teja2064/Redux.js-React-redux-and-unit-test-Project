import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios"


const initialContacts={
    contacts:[],
    error:'',
    isLoading:false
}
export const asyncFetchContacts = createAsyncThunk(
    'content/fetchContent',

    async () =>{
        
        const res = await axios('http://localhost:8000/contacts')
        const data = await res.data
        return data
    }
)

export const asyncAddContacts = createAsyncThunk(
    'content',
    async(contact)=>{
        const res = await axios.post('http://localhost:8000/contacts',contact)
        const data =res.data
        return data
    } 
)

export const asyncEditContact = createAsyncThunk(
    'content-editContact',
    async(payload)=>{
        const res = await axios.put(`http://localhost:8000/contacts/${payload.id}`,payload.contact)
            const data =res.data
            return {id,data}
    }
)

export const asyncDeleteContact = createAsyncThunk(
    'content-DeleteContact',
    async (contact) =>{
        const res = await axios.delete(`http://localhost:8000/contacts/${contact.id}`)
        const data = res.data
        return {id,data}
    }
)


// 
export const contactsSlice = createSlice({
    name:"contacts",
    initialState: initialContacts,
    reducers:{
        getContacts: (state)=> state,
        addContacts:(state,payload)=>{

        }

    },
    extraReducers:(builder)=>{
        builder.addCase(asyncFetchContacts.pending,(state)=>{
            state.isLoading=true

        })
        builder.addCase(asyncFetchContacts.fulfilled,(state,action)=>{
            state.contacts = action.payload
            state.isLoading=false

        })
        builder.addCase(asyncFetchContacts.rejected,(state,action)=>{
            state.isLoading=false
            state.error=action.error.message

        })

        builder.addCase(asyncAddContacts.pending,(state)=>{
            state.isLoading=true

        })
        builder.addCase(asyncAddContacts.fulfilled,(state,action)=>{
            state.isLoading=false
            state.contacts.push(action.payload)
        })
        builder.addCase(asyncAddContacts.rejected,(state,action)=>{
            state.isLoading=false
            state.error =action.error.message

        })
        builder.addCase(asyncEditContact.pending,(state,action)=>{
            state.isLoading=true
        })
        builder.addCase(asyncEditContact.fulfilled,(state,action)=>{
            state.isLoading=true
            
        })
        builder.addCase(asyncEditContact.rejected,(state,action)=>{
            state.isLoading=false
            state.error=action.error.message

        })
        builder.addCase(asyncDeleteContact.pending,(state)=>{
            state.isLoading=true
        })
        builder.addCase(asyncDeleteContact.fulfilled,(state,action)=>{
             state.isLoading=true
        })
        builder.addCase(asyncDeleteContact.rejected,(state,action)=>{
            state.isLoading=false
            state.error=action.error.message
        })

    }

})

export const {getContacts}=
contactsSlice.actions
export default contactsSlice.reducer
