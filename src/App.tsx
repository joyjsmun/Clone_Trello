import {DragDropContext,Droppable,Draggable} from "react-beautiful-dnd";

function App(){
  const onDragEnd = () => {}
  return <DragDropContext onDragEnd={onDragEnd}>
    <div>
      <Droppable droppableId="one">
        {() => 
        <ul>
          <Draggable draggableId="first" index={0}>
            {() => <li>1111</li>}
            </Draggable>  
            <Draggable draggableId="second" index={1}>
            {() => <li>2222</li>}
            </Draggable>    
            <Draggable draggableId="Third" index={2}>
            {() => <li>3333</li>}
            </Draggable>  
          </ul>}
      </Droppable>
    </div>
  </DragDropContext>;
}


export default App;