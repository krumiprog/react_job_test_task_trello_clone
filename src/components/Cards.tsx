import {
  Droppable,
  DroppableProvided,
  DroppableStateSnapshot,
} from 'react-beautiful-dnd';
import Card from './Card';

type CardsProps = {
  id: string;
  cards: {
    id: string;
    content: string;
  }[];
};

const Cards: React.FC<CardsProps> = ({ id, cards }) => {
  return (
    <Droppable droppableId={id} direction="vertical">
      {(provided: DroppableProvided, snapshot: DroppableStateSnapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.droppableProps}
          className="cards"
        >
          {cards.map((card, index) => (
            <Card key={card.id} {...card} index={index} />
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default Cards;
