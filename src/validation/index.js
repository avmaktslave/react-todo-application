export const validate = values => {
  const errors = {};

  if (!values.inputText)
    errors.inputText = 'It looks like you forgot to enter text';

  return errors;
};
