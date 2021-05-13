import React, { useEffect, useRef, useState } from 'react';
import { ReactComponent as AddIcon } from '../assets/Vector.svg';
import { ReactComponent as CloseIcon } from '../assets/cross.svg';

type AddFormProps = {
  isAddColumn: boolean;
  setText: (text: string) => void;
};

const AddForm: React.FC<AddFormProps> = ({ isAddColumn, setText }) => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [value, setValue] = useState('');

  const inputRef = useRef<HTMLTextAreaElement>(null!);

  useEffect(() => {
    if (isFormVisible) {
      inputRef.current.focus();
    }
  }, [isFormVisible]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (value.trim().length > 0) {
      setText(value);
      setValue('');
      setIsFormVisible(false);
    }
  };

  return (
    <div className="form">
      {!isFormVisible ? (
        <button onClick={() => setIsFormVisible(true)} className="btn btn-add">
          <AddIcon />
          {isAddColumn ? (
            <span>Добавить еще одну колонку</span>
          ) : (
            <span>Добавить еще одну карточку</span>
          )}
        </button>
      ) : (
        <form onSubmit={handleSubmit}>
          <textarea
            value={value}
            onChange={e => setValue(e.target.value)}
            ref={inputRef}
            required
            placeholder={
              isAddColumn
                ? 'Введите название колонки'
                : 'Введите название карточки'
            }
            className={`input${isAddColumn ? ' input-column' : ' input-card'}`}
          ></textarea>
          <div className="buttons">
            <button type="submit" className="btn-submit">
              {isAddColumn ? 'Добавить колонку' : 'Добавить карточку'}
            </button>
            <button onClick={() => setIsFormVisible(false)} className="btn">
              <CloseIcon />
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default AddForm;
