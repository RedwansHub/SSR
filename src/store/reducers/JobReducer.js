import { createSlice } from "@reduxjs/toolkit";




export const initialState = { 
    value : { 
        title: "", 
        slug: "",
        location: "",
        Salary: "",
        jobType: "",
        Description: "",
        Requ: "",
        company: "",
        img: "",
    }
}


export const JobReducer = ( initialState, action) => {
    initialState.value = action.payload;
}

export const useSlice = createSlice({
    name: "user",
    initialState: { value:{ 
        title: "", 
        slug: "",
        location: "",
        Salary: "",
        jobType: "",
        Description: "",
        Requ: "",
        company: "",
        img: "",
    },
        reducers: {
            JobReducer:  (initialState, action) => {
                initialState.value = action.payload;
            }
        }
    }
})

export default useSlice.JobReducer;