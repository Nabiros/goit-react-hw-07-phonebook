import { Wrapper, Label, Input } from "./Filter.styled";
import { connect } from "react-redux";
import { getFilteredName } from "../../redux/PhoneBook/actions";
import { getFilter } from "../../redux/PhoneBook/selectors";

const Filter = ({ value, onChange }) => (
  <Wrapper>
    <Label htmlFor="filter">Find contacts by name</Label>
    <Input type="text" name="filter" value={value} onChange={onChange} />
  </Wrapper>
);

const mapStateToProps = state => ({
  value: getFilter(state),
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(getFilteredName(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);