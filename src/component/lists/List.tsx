import {IList} from "./Interface/List.Interface";
import {ListStyled} from "../../style/lists/List.Styled";
import {TitleList} from "./TitleList";
import {AddCard} from "../cards/AddCard";
import {Card} from "../cards/Card";
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {DragDropContext, Draggable, Droppable, DropResult} from "react-beautiful-dnd";

export function List({title, id, cards, provided}: IList) {
    const [arrCard, setArrCard] = useState(cards);
    let cardAdd = useSelector((state: any) => {
        return state.card.cardAdd
    })

    useEffect(() => {
        setArrCard(cards);
    }, [cards])

    useEffect(() => {
        if (cardAdd.lists === id) {
            setArrCard([...arrCard, cardAdd])
        }
    }, [cardAdd]);

    const getCardStyle = (isDragging: boolean, draggableStyle: any) => ({
        ...draggableStyle
    })


    return (
        <ListStyled>
            <div className={'list_cards'}>
                <div  {...provided.dragHandleProps} className={'drop__title'} style={{width: '270px', height: '100%'}}>
                    <TitleList title={title} id={id}/>
                </div>
                <Droppable direction={"vertical"} type={"nested"} droppableId={"Drop__card"}>
                    {(provided) => (
                        <div
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                            className={'list__card__render'}>
                            {arrCard.map((card: any, index) => (
                                <Draggable key={card._id} index={index} draggableId={card._id} data-type={'nested'}>
                                    {(provided, snapshot) => (
                                        <div
                                            ref={provided.innerRef}
                                            {...provided.dragHandleProps}
                                            style={{...getCardStyle(snapshot.isDragging, provided.draggableProps.style),
                                            top: 0}}
                                        >
                                            <Card provided={provided} detail={card.detail} key={`${index}`}
                                                  _id={card._id}
                                                  index_list={card.index_list}/>
                                        </div>
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
                <AddCard id={id}/>
            </div>
        </ListStyled>
    )
}