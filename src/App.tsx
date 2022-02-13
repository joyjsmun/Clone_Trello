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
  grid-template-columns:repeat(4,1fr) ;
  min-height: 200px;
`



const toDos = ["a","b","c","d","e"]

function App(){
  const [toDos,setToDos] = useRecoilState(toDoState);
  const onDragEnd = (info:DropResult) => {
    console.log(info);
    const {destination,source,draggableId} = info;
    if(!destination) return;
    if(destination?.droppableId === source.droppableId){
      setToDos(allBoards => {
        const boardCopy = [...allBoards[source.droppableId]];
        const taskObj = boardCopy[source.index]
        boardCopy.splice(source.index,1);
        boardCopy.splice(destination?.index,0,taskObj)
       return {
         ...allBoards,
         [source.droppableId]: boardCopy,
       };
     }
     )
    }
    if(destination?.droppableId !== source.droppableId){
      setToDos((allBoards) => {
        const sourceBoard = [...allBoards[source.droppableId]];
        const taskObj = sourceBoard[source.index]
        const destinationBoard = [...allBoards[destination.droppableId]];
        sourceBoard.splice(source.index,1);
        destinationBoard.splice(destination?.index,0,taskObj);
        return{
          ...allBoards,
          [source.droppableId]:sourceBoard,
          [destination.droppableId]:destinationBoard,
        }
      })
    }
  
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