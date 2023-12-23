import { useDispatch } from 'react-redux';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import PersonIcon from '@mui/icons-material/Person';
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteContact } from '../../redux/contacts/contactsOperations';

export const ContactItem = ({ id, name, phone }) => {
  const dispatch = useDispatch();

  const handleDeleteButtonClick = id => {
    dispatch(deleteContact(id));
  };

  return (
    <ListItem
      secondaryAction={
        <IconButton
          edge="end"
          aria-label="delete"
          onClick={() => handleDeleteButtonClick(id)}
        >
          <DeleteIcon color="primary" />
        </IconButton>
      }
    >
      <ListItemAvatar>
        <Avatar sx={{ backgroundColor: '#f6d9b1', color: '#252525' }}>
          <PersonIcon fontSize="large" />
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={name}
        secondary={phone}
        primaryTypographyProps={{ color: '#f6d9b1' }}
        secondaryTypographyProps={{ color: '#dca75d' }}
        sx={{ textTransform: 'capitalize' }}
      />
    </ListItem>
  );
};
