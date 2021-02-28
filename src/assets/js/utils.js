export const deleteEmpty = arr => arr.filter(item => {
  if (Array.isArray(item)) return item.some(cur => cur);
  else return Object.values(item).some(cur => cur);
});

export const capitalizeFirstLetter = text => text
  ? `${text.charAt(0).toUpperCase()}${text.slice(1)}`
  : '';

export const objToArr = obj => obj
  ? Object.entries(obj)
    .map(([key, values]) => ({ ...values, id: key }))
  : [];

export const sortAlphabetically = (arr, field) => arr.sort((a, b) => {
  if(a[field] < b[field]) return -1;
  if(a[field] > b[field]) return 1;
  return 0;
});

export const isEmpty = value => !(value && (value.length || Object.keys(value).length));
