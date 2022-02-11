import {DragDropContext,Droppable,Draggable} from "react-beautiful-dnd";
import styled from "styled-components";

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

const Card = styled.div`
  border-radius:3px;
  padding:10px 10px;
  margin-bottom: 5px;
  background-color: ${(props) => props.theme.cardColor};
`

const toDos = ["a","b","c","d","e"]

function App(){
  const onDragEnd = () => {}
  return <DragDropContext onDragEnd={onDragEnd}>
    <Wrapper>
      <Boards>
     <Droppable droppableId="one">
        {(magic) => 
        <Board ref={magic.innerRef} {...magic.droppableProps}>
          {toDos.map((toDo,index) =><Draggable draggableId={toDo} index={index}>
            {(magic) => 
              <Card ref={magic.innerRef} 
               {...magic.draggableProps} 
               {...magic.dragHandleProps}>
                 {toDo}
               </Card>}
            </Draggable>)}   
          {magic.placeholder}
          </Board>}
      </Droppable>
      </Boards>
    </Wrapper>
  </DragDropContext>;
}


export default App;