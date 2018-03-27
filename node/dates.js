// Dates Difference
// Reference: https://date-fns.org/v1.29.0/docs/differenceInDays
// 2 July 2011 23:00:00 and 2 July 2012 00:00:00?
// `yarn add date-fns` is required
import differenceInDays from 'date-fns/difference_in_days'

const result = differenceInDays(
  new Date(2012, 6, 2, 0, 0),
  new Date(2011, 6, 2, 23, 0)
)
//=> 365
