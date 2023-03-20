import {List} from "./List";
import {useEffect, useState} from "react";
import {AddList} from "./AddList";
import {DragDropContext, Draggable, Droppable, DropResult} from "react-beautiful-dnd";

export function RenderList({lists}: any | []) {
    const [arrLists, setArrLists] = useState(lists || []);
    useEffect(() => {
        setArrLists(lists)
    }, [lists])
    const onDragEnd = (result: DropResult) => {
        const {source, destination} = result;
        let startIndex = source.index;
        let endIndex = destination ? destination.index : startIndex;
        const newLists = [...arrLists];
        const [listDrop] = newLists.splice(startIndex, 1);
        newLists.splice(endIndex, 0, listDrop);
        setArrLists(newLists)
    }
    const withDragDropContext = lists.length * 281 + "px";
    const getItemStyle = (isDragging: boolean, draggableStyle: any) => ({
        ...draggableStyle
    })
    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Droppable direction={'horizontal'} droppableId='drop__title'>
                {(provided) => (
                    <div style={{display: "flex", minWidth: withDragDropContext}}
                         {...provided.droppableProps}
                         ref={provided.innerRef}>
                        {arrLists.map((item: any, index: number) => (
                            <Draggable key={item._id} draggableId={item._id} index={index}>
                                {(provided, snapshot) => {
                                    return (
                                        <div
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            style={getItemStyle(snapshot.isDragging, provided.draggableProps.style)}>
                                            <List key={index} title={item.title} id={item._id} cards={item.cards}
                                                  provided={provided}/>
                                        </div>
                                    )
                                }}
                            </Draggable>
                        ))}
                    </div>
                )}
            </Droppable>
            <AddList/>
        </DragDropContext>
    )
}
