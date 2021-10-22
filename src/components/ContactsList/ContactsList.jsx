import { List, ListItem } from "./ContactsList.styled";
import { Button } from '../../App/App.styled';
import { connect } from "react-redux";
import { removeContact } from "../../redux/PhoneBook/actions";
import { getFilteredName } from '../../redux/PhoneBook/selectors';

function ContactsList({ contacts, deleteId }) {
  return (
    <div>
      <List>
        {contacts.map(contact => {
          const { id, name, number } = contact;
          return (
            <ListItem key={id}>
              {name} - {number}{' '}
              <Button type="button" onClick={() => deleteId(id)}>
                Delete
              </Button>
            </ListItem>
          );
        })}
      </List>
    </div>
  );
}


const mapStateToProps = state => ({
  contacts: getFilteredName(state),
});

const mapDispatchToProps = dispatch => ({
  deleteId: id => dispatch(removeContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);