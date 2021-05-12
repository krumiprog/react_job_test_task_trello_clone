import Card from './Card';

type CardsProps = {
  cards: { id: number; content: String }[];
  // setIsFormVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

const Cards: React.FC<CardsProps> = ({ cards }) => {
  return (
    <div className="cards">
      {cards.map(card => (
        <Card key={card.id} content={card.content} />
      ))}
    </div>
  );
};

export default Cards;
