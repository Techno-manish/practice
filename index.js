const addDays = require('date-fns/addDays')
function result(days) {
  const date = new Date(2020,7,22)
  let newDate = addDays(date, days)
  day = newDate.getDate()
  month = newDate.getMonth() + 1
  console.log(`${day}-${month}-${newDate.getFullYear()}`)
}
// result(2)
module.exports = result
