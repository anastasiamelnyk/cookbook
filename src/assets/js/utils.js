export const deleteEmpty = arr => arr.filter(item => {
  if (Array.isArray(item)) return item.some(cur => cur);
  else return Object.values(item).some(cur => cur);
});
