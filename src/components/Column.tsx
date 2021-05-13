import { useAppDispatch } from '../hooks';
import { addNewCard } from '../cardsSlice';
import { Card } from '../cardsSlice';
import AddForm from './AddForm';
import Cards from './Cards';

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
      {title && <h2 className="column-title">{title}</h2>}
      <Cards id={id} cards={cards} />
      <AddForm isAddColumn={false} setText={setText} />
    </div>
  );
};

export default Column;
