import { useState } from "react"
import { AddItemButton } from "../styles"
import NewItemForm from "./NewItemForm"

interface AddNewItem {
    onAdd(text:string):void ,
    toggleTextButtoon:string,
    dark?:boolean
}

const AddNewItem = (props:AddNewItem) => {
    const[showForm,setShowForm]=useState(false)
    const{onAdd,toggleTextButtoon,dark}=props

    if(showForm){
        return (
            <NewItemForm onAdd={text =>{
                 onAdd(text) 
                 setShowForm(false)}}/>
        )
    }

  return (
    <AddItemButton dark={dark} onClick={()=> setShowForm(true)}>
        {toggleTextButtoon}
    </AddItemButton>
  )
}

export default AddNewItem