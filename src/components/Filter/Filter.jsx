import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { updateFilter } from '../../redux/filter/filterSlice';
import { selectFilter } from '../../redux/filter/selectFilter';
import { TextInput } from './Filter.styled';

export const Filter = () => {
  const filterValue = useSelector(selectFilter);
  const dispatch = useDispatch();
  const filterInputId = nanoid();

  const handleFilterInputChange = event => {
    const { value } = event.currentTarget;
    dispatch(updateFilter(value));
  };

  return (
    <TextInput
      label="Find contacts by name"
      type="text"
      name="filter"
      id={filterInputId}
      value={filterValue}
      onChange={handleFilterInputChange}
      variant="outlined"
      sx={{
        '& > :not(style)': {
          m: 1,
          width: '32ch',
          input: { color: '#f6d9b1' },
          marginBottom: '20px',
        },
      }}
    />
  );
};
