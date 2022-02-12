import {DragDropContext,Droppable,Draggable,DropResult} from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { toDoState } from "./atoms";
import DraggableCard from "./Components/DraggableCard";
import Board from "./Board";

const Wrapper = styled.div`
  display: flex;
  max-width: 680px ;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

const Boards = styled.div`
  display: grid;
  gap:15px;
  width: 100%;
  grid-template-columns:repeat(3,1fr) ;
  min-height: 200px;
`



const toDos = ["a","b","c","d","e"]

function App(){
  const [toDos,setToDos] = useRecoilState(toDoState);
 
  const onDragEnd = ({draggableId,destination,source}:DropResult) => {
    if(!destination) return;
    // setToDos(oldToDos => {
    //   const copyTodos = [...oldToDos];
    //    copyTodos.splice(source.index,1);
    //    copyTodos.splice(destination?.index,0,draggableId)
    //   return copyTodos;
    // })
  }

  return( <DragDropContext onDragEnd={onDragEnd}>
    <Wrapper>
      <Boards>
      {Object.keys(toDos).map((boardId) => (<Board boardId={boardId} key={boardId} toDos={toDos[boardId]} />))}
      </Boards>
    </Wrapper>
  </DragDropContext>
  );
}


export default App;