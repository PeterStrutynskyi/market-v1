export const required = value => (
  !value || value.trim().length < 0 ?
    'This field is required!'
    :
    undefined
);

export const isNumber = value => (
  isNaN(value) ?
    'This field should be a Number!'
    :
    undefined
);

export const isEmail = value => (
  !value || !value.includes('@') ?
    'Enter valid email!'
    :
    undefined
);

export const validLength = ( value, length ) => (
  !value || value.trim().length < length ?
    `This field should be ${length} symbols length!`
    :
    undefined
);