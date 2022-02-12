import {Draggable} from "react-beautiful-dnd";
import styled from "styled-components";
import React from "react";

interface IDragabbleCardProps{
    toDo:string;
    index:number;
}

const Card = styled.div`
  border-radius:3px;
  padding:10px 10px;
  margin-bottom: 5px;
  background-color: ${(props) => props.theme.cardColor};
`

function DraggableCard({toDo,index}:IDragabbleCardProps) {
   console.log(toDo,"has been rendered");
 return (
    <Draggable key={toDo} draggableId={toDo} index={index}>
    {(magic) => 
      <Card ref={magic.innerRef} 
       {...magic.draggableProps} 
       {...magic.dragHandleProps}>
         {toDo}
       </Card>}
    </Draggable>
 )   
}

export default React.memo(DraggableCard);