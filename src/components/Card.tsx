type CardProps = {
  content: String;
};

const Card: React.FC<CardProps> = ({ content }) => {
  return <div className="card">{content}</div>;
};

export default Card;
