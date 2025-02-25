import { ColumnContainer,ColumnTitle } from "../styles"
import AddNewItem from "./AddNewItem"
import { useAppState } from "../AppStateContext"
import Card from "./Card"

interface ColumnProps{
    text:string
    index:number
}



const Column = ({text,index}:ColumnProps) => {
    const{state}=useAppState()

  return (
    <ColumnContainer>
        <ColumnTitle>{text}</ColumnTitle>
        {state.lists[index].tasks.map((task)=>{
            return <Card text={task.text}  key={task.id} />
        })}
        <AddNewItem toggleTextButtoon="+ Add new item" onAdd={console.log} dark />
    </ColumnContainer>
  )
}

export default Column