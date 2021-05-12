import { useAppDispatch } from '../hooks';
import { addNewCard } from '../cardsSlice';
import { Card } from '../cardsSlice';
import AddForm from './AddForm';
import Cards from './Cards';

type ColumnProps = {
  columnIndex: number;
  title: String;
  cards: Card[];
};

const Column: React.FC<ColumnProps> = ({ columnIndex, title, cards }) => {
  const dispatch = useAppDispatch();

  const setText = (content: String) => {
    dispatch(addNewCard({ columnIndex, content }));
  };

  return (
    <div className="column">
      {title && <h2 className="column-title">{title}</h2>}
      <Cards cards={cards} />
      <AddForm isAddColumn={false} setText={setText} />
    </div>
  );
};

export default Column;