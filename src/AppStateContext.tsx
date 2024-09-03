import React, { useContext, useReducer, createContext } from "react"



type Action = {
    type :"ADD_LIST"
    payload:string
} | {
    type: "ADD_TASK"
    payload:{text:string, taskId:string}
}


interface Task{
    id:string,
    text:string
}

interface List {
    id:string ,
    text:string,
    tasks : Task[]
}

export  interface AppState{
    lists : List[]
}

const appData: AppState = {
    lists: [
    {
    id: "0",
    text: "To Do",
    tasks: [{ id: "c0", text: "Generate app scaffold" }]
    },
    {
    id: "1",
    text: "In Progress",
    tasks: [{ id: "c2", text: "Learn Typescript" }]
    },
    {
    id: "2",
    text: "Done",
    tasks: [{ id: "c3", text: "Begin to use static typing" }]
    }
    ]
    }
    
    interface AppStateContextProps{
        state:AppState;
        dispatch:React.Dispatch<Action> 
    }


const AppReducer = (state:AppState, action:Action):AppState=>{
    switch(action.type){
        case "ADD_LIST":{
            return {
                ...state,
            lists:[
                ...state.lists,
                {id:String(new Date),text:action.payload,tasks:[]}
            ]}
        }
        case "ADD_TASK":{
            return {...state}
        }
        default:{
            return state
        }
    }
}


const AppStateContext = createContext<AppStateContextProps>({} as AppStateContextProps)
        

export const AppStateProvider = ({children}:React.PropsWithChildren<{}>)=>{
    const[state,dispatch]=useReducer(AppReducer,appData)

    return <AppStateContext.Provider value={{state,dispatch}}>
        {children}
    </AppStateContext.Provider>
}

export const useAppState=()=>{
    return useContext(AppStateContext)
}