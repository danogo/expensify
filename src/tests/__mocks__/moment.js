// have to use requireActual, simple import doesn't work because it would try to import moment from here (__mocks__), and end up in loop
const moment = require.requireActual('moment');

export default (timestamp = 0) => {
  return moment(timestamp);
};

