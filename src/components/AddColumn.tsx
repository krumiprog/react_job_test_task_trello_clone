import { useAppDispatch } from '../hooks';
import { addNewColumn } from '../cardsSlice';
import AddForm from './AddForm';

const AddColumn: React.FC<{}> = () => {
  const dispatch = useAppDispatch();

  const setText = (title: String) => {
    dispatch(addNewColumn(title));
  };

  return (
    <div className="column">
      <AddForm isAddColumn={true} setText={setText} />
    </div>
  );
};

export default AddColumn;
