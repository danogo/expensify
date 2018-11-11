import moment from 'moment';
// Selectors are functions that query our data from store

const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
  return expenses.filter(expense => {
    const createdAtMoment = moment(expense.createdAt);
    const matchesStartDate = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true; 
    const matchesEndDate = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
    const matchesText = expense.description.toLowerCase().includes(text.toLowerCase());
    // is filtered out if returns false
    return matchesStartDate && matchesEndDate && matchesText;
  }).sort((a, b) => {
    if (sortBy === 'date') {
      return b.createdAt - a.createdAt;
    } else if (sortBy === 'amount') {
      return b.amount - a.amount;
    } 
  });
};

export default getVisibleExpenses;