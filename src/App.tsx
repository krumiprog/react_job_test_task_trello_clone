import { useAppDispatch, useAppSelector } from './hooks';
import {
  dropCardOtherColumn,
  dropCardSameColumn,
  selectCount,
} from './cardsSlice';
import Column from './components/Column';
import AddColumn from './components/AddColumn';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';

const App = () => {
  const cards = useAppSelector(selectCount);
  const dispatch = useAppDispatch();

  const handleDragEnd = (result: DropResult): void => {
    const { source, destination } = result;

    if (!destination) {
      return;
    }

    if (source.droppableId === destination.droppableId) {
      dispatch(
        dropCardSameColumn({
          column: source.droppableId,
          source: source.index,
          destination: destination.index,
        })
      );
    } else {
      dispatch(
        dropCardOtherColumn({
          columnFrom: source.droppableId,
          columnTo: destination.droppableId,
          source: source.index,
          destination: destination.index,
        })
      );
    }
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className="app">
        {cards.map((column, index) => (
          <Column key={column.id} {...column} columnIndex={index} />
        ))}
        <AddColumn />
      </div>
    </DragDropContext>
  );
};

export default App;
