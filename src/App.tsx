import {DragDropContext,Droppable,Draggable,DropResult} from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { toDoState } from "./atoms";
import DraggableCard from "./Components/DraggableCard";

const Wrapper = styled.div`
  display: flex;
  max-width: 480px ;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

const Boards = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns:repeat(1,1fr) ;
  min-height: 200px;
`


const Board = styled.div`
  padding:0px 10px;
  padding-top: 30px;
  background-color: ${(props) => props.theme.boardColor};
  border-radius:3px;
  
`


const toDos = ["a","b","c","d","e"]

function App(){
  const [toDos,setToDos] = useRecoilState(toDoState);
 
  const onDragEnd = ({draggableId,destination,source}:DropResult) => {
    if(!destination) return;
    setToDos(oldToDos => {
      const copyTodos = [...oldToDos];
       copyTodos.splice(source.index,1);
       copyTodos.splice(destination?.index,0,draggableId)
      return copyTodos;
    })
  }

  return <DragDropContext onDragEnd={onDragEnd}>
    <Wrapper>
      <Boards>
     <Droppable droppableId="one">
        {(magic) => 
        <Board ref={magic.innerRef} {...magic.droppableProps}>
          {toDos.map((toDo,index) =>
          <DraggableCard key={toDo} index={index} toDo={toDo} />
          )}   
          {magic.placeholder}
          </Board>}
      </Droppable>
      </Boards>
    </Wrapper>
  </DragDropContext>;
}


export default App;