import {Droppable} from "react-beautiful-dnd";
import DraggableCard from "./Components/DraggableCard";
import styled from "styled-components";


const Wrapper = styled.div`
  padding:0px 10px;
  padding-top: 30px;
  background-color: ${(props) => props.theme.boardColor};
  border-radius:3px;
  display: flex;
  flex-direction: column;
  
`
const Title = styled.h2`
text-align: center;
font-weight: 600;
margin-bottom: 10px;
font-size: 18px;
`
interface IAreaProps{
    isDraggingOver:boolean;
    isDraggingFromThis:boolean;
}

const Area = styled.div<IAreaProps>`
    background-color: ${(props) =>(props.isDraggingOver ? "pink" : props.isDraggingFromThis ? "red":"blue")};
    flex-grow: 1;

`

interface IBoardProps{
    toDos:string[];
    boardId:string;
}




function Board({toDos,boardId}:IBoardProps){
    return (
    <Wrapper>
        <Title>{boardId}</Title>
        <Droppable droppableId={boardId}>
        {(magic,snapshot) => 
        <Area isDraggingOver={snapshot.isDraggingOver} isDraggingFromThis = {Boolean(snapshot.draggingFromThisWith)} ref={magic.innerRef} {...magic.droppableProps}>
            
          {toDos.map((toDo,index) =>
          (<DraggableCard key={toDo} index={index} toDo={toDo} />
          ))}   
          {magic.placeholder}
          </Area>}
      </Droppable>
    </Wrapper>
    )
}


export default Board;