import { useAppDispatch } from '../hooks';
import { addNewCard, deleteColumn } from '../cardsSlice';
import { Card } from '../cardsSlice';
import AddForm from './AddForm';
import Cards from './Cards';
import { ReactComponent as CloseIcon } from '../assets/cross.svg';

type ColumnProps = {
  id: string;
  title: string;
  cards: Card[];
  columnIndex: number;
};

const Column: React.FC<ColumnProps> = ({ id, title, cards, columnIndex }) => {
  const dispatch = useAppDispatch();

  const setText = (content: string): void => {
    dispatch(addNewCard({ columnIndex, content }));
  };

  return (
    <div className="column">
      {title && (
        <div className="column-header">
          <h2 title={title} className="column-title">
            {title}
          </h2>
          <button
            onClick={() => dispatch(deleteColumn(id))}
            className="btn btn-close"
          >
            <CloseIcon />
          </button>
        </div>
      )}
      <Cards id={id} cards={cards} />
      <AddForm isAddColumn={false} setText={setText} />
    </div>
  );
};

export default Column;
