import {Droppable} from "react-beautiful-dnd";
import DraggableCard from "./Components/DraggableCard";
import styled from "styled-components";


const Wrapper = styled.div`
  padding:0px 10px;
  padding-top: 30px;
  background-color: ${(props) => props.theme.boardColor};
  border-radius:3px;
  
`
interface IBoardProps{
    toDos:string[];
    boardId:string;
}


function Board({toDos,boardId}:IBoardProps){
    return (
        <Droppable droppableId={boardId}>
        {(magic) => 
        <Wrapper ref={magic.innerRef} {...magic.droppableProps}>
          {toDos.map((toDo,index) =>
          (<DraggableCard key={toDo} index={index} toDo={toDo} />
          ))}   
          {magic.placeholder}
          </Wrapper>}
      </Droppable>
    )
}


export default Board;