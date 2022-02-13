import {Draggable} from "react-beautiful-dnd";
import styled from "styled-components";
import React from "react";

interface IDragabbleCardProps{
    toDoId:number;
    toDoText:string;
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

function DraggableCard({toDoId,index,toDoText}:IDragabbleCardProps) {
 return (
    <Draggable draggableId={toDoId+""} index={index}>
    {(magic,snapshot) => 
      <Card 
      isDragging= {snapshot.isDragging}
      ref={magic.innerRef} 
       {...magic.draggableProps} 
       {...magic.dragHandleProps}>
         {toDoText}
       </Card>}
    </Draggable>
 )   
}

export default React.memo(DraggableCard);