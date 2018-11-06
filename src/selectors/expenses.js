// Selectors are functions that query our data from store

export const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
  return expenses.filter(expense => {
    const matchesStartDate = typeof startDate !== 'number' || startDate >= expense.createdAt; 
    const matchesEndDate = typeof endDate !== 'number' || endDate <= expense.createdAt;
    const matchesText = expense.description.toLowerCase().includes(text.toLowerCase());
    // is filtered in if returns true
    return matchesStartDate && matchesEndDate && matchesText;
  }).sort((a, b) => {
    if (sortBy === 'date') {
      return b.createdAt - a.createdAt;
    } else if (sortBy === 'amount') {
      return b.amount - a.amount;
    } 
  });
};