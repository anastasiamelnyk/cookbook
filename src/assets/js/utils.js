export const deleteEmpty = arr => arr.filter(item => {
  if (Array.isArray(item)) return item.some(cur => cur);
  else return Object.values(item).some(cur => cur);
});

export const capitalizeFirstLetter = text => `${text.charAt(0).toUpperCase()}${text.slice(1)}`;
