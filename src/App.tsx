import { useAppSelector } from './hooks';
import { selectCount } from './cardsSlice';
import Column from './components/Column';
import AddColumn from './components/AddColumn';

const App = () => {
  const cards = useAppSelector(selectCount);

  return (
    <div className="app">
      {cards.map((card, index) => (
        <Column key={card.id} columnIndex={index} {...card} />
      ))}
      <AddColumn />
    </div>
  );
};

export default App;
