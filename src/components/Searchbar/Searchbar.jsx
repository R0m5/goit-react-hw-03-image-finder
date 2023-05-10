import PropTypes from 'prop-types';
import { Formik, Field } from 'formik';
import {
  Header,
  SearchForm,
  ButtonForm,
  ButtonLabel,
  Input,
} from './Searchbar.styled';

const Searchbar = ({ onFormSubmit }) => {
  return (
    <Header>
      <Formik
        initialValues={{ value: '' }}
        onSubmit={(values, { resetForm }) => {
          onFormSubmit(values.value.trim());
          resetForm();
        }}
      >
        <SearchForm>
          <ButtonForm type="submit">
            <ButtonLabel>Search</ButtonLabel>
          </ButtonForm>
          <Field
            as={Input}
            name="value"
            autocomplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </SearchForm>
      </Formik>
    </Header>
  );
};

Searchbar.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
