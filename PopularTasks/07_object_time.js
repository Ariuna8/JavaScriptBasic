//What this data shape is telling us is that the open times for this store are Monday
//thru Friday from 7am to 5pm. But this may not be so easily consumable on the front end.
//It would be easier if this was an array object. Your mission, if you choose to accept it,
//is to massage this data into a shape like so:
//const timesArray = [
//   {
//     open : '07:00',
//     close: '17:00',
//     days : ['monday','tuesday', 'wednesday', thursday', 'friday'],
//   }
// ]

const timesObject = {
  monday   : [{ open: '07:00', close: '17:00' }],
  tuesday  : [{ open: '07:00', close: '17:00' }],
  wednesday: [{ open: '07:00', close: '17:00' }],
  thursday : [{ open: '07:00', close: '17:00' }],
  friday   : [{ open: '06:00', close: '17:00' }],
  saturday : [],
  sunday   : [],
}
function shapeTimesObjectIntoIterableArray(timesObject) {
  let table = {}
  let open
  let close
  let timeStr
  for (let key in timesObject) {
    if(timesObject[key].length){
      open = timesObject[key][0].open
      console.log(open)
      close = timesObject[key][0].close
      console.log(close)
      timeStr =`${open}:${close}`
      if(!table[timeStr]){
        table[timeStr] = {
          open: open,
          close: close,
          days: [key]
        }
      }
      else {
        table[timeStr].days.push(key)
      }
    }
  }
  let result = []
  for (let time in table){
    result.push(table[time])
  }
  return result
}

console.log(shapeTimesObjectIntoIterableArray(timesObject))