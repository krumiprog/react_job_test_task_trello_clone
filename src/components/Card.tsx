import {
  Draggable,
  DraggableProvided,
  DraggableStateSnapshot,
} from 'react-beautiful-dnd';

type CardProps = {
  id: string;
  content: string;
  index: number;
};

const Card: React.FC<CardProps> = ({ id, content, index }) => {
  return (
    <Draggable draggableId={id} index={index}>
      {(provided: DraggableProvided, snapshot: DraggableStateSnapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="card"
        >
          {content}
        </div>
      )}
    </Draggable>
  );
};

export default Card;
