import { configureStore} from "@reduxjs/toolkit";
import contactsReducer from "./Components/ContactSlice"
const store = configureStore({
    reducer:{
         contactsReducer: contactsReducer
    },
})

export default store