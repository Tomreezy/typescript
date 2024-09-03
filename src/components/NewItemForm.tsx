
import { useState } from "react"
import { NewItemButton,NewItemInput, NewItemFormContainer } from "../styles"
import useFocus from "../utils/useFocus"



interface NewItemFormProps{
    onAdd(text:string ):void
}


const NewItemForm = (props:NewItemFormProps) => {
    const[text,setText]=useState("")
    const{onAdd}=props
    const inputRef=useFocus()



  return (
    <NewItemFormContainer>
        <NewItemInput value={text} ref={inputRef} onChange={(e)=> setText(e.target.value)} />

        <NewItemButton onClick={()=> onAdd(text)}>
            Create
        </NewItemButton>
    </NewItemFormContainer>
  )
}

export default NewItemForm