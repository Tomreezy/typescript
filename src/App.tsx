import { AppContainer } from "./styles"
import Column from "./components/Column"
import Card from "./components/Card"
import AddNewItem from "./components/AddNewItem"
import { useAppState } from "./AppStateContext"


const App = () => {
  const{state}=useAppState()

  return (
    <AppContainer>
      {state.lists.map((list,i)=>{
        return <Column text={list.text} key={list.id} index={i}  />
      })}
      <AddNewItem toggleTextButtoon="Add new list"  onAdd={console.log} />
    </AppContainer>
  )
}

export default App
