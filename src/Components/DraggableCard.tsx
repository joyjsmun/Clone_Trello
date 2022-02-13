import {Draggable} from "react-beautiful-dnd";
import styled from "styled-components";
import React from "react";

interface IDragabbleCardProps{
    toDo:string;
    index:number;
}

const Card = styled.div<{isDragging:boolean}>`
  border-radius:3px;
  padding:10px;
  margin-bottom: 5px;
  background-color: ${(props) => props.isDragging ? "#e4f2ff" : props.theme.cardColor};
  box-shadow: ${(props) =>
    props.isDragging ? "0px 2px 5px rgba(0, 0, 0, 0.05)" : "none"};
`

function DraggableCard({toDo,index}:IDragabbleCardProps) {
 return (
    <Draggable key={toDo} draggableId={toDo} index={index}>
    {(magic,snapshot) => 
      <Card 
      isDragging= {snapshot.isDragging}
      ref={magic.innerRef} 
       {...magic.draggableProps} 
       {...magic.dragHandleProps}>
         {toDo}
       </Card>}
    </Draggable>
 )   
}

export default React.memo(DraggableCard);