import moment from 'moment';

export default [
  {
    id: 1,
    description: 'Food',
    note: '',
    amount: 34500,
    createdAt: 0
  },
  {
    id: 2,
    description: 'Rent',
    note: 'bill for one month',
    amount: 734500,
    createdAt: moment(0).subtract(4, 'days').valueOf()
  },
  {
    id: 3,
    description: 'Book',
    note: '12 rules of life',
    amount: 13370,
    createdAt: moment(0).add(4, 'days').valueOf()
  }
]