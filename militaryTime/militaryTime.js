/*
Military Time
Given a string that represents time in hours and minutes, convert the string to military time (if necessary).

Examples: 

toMilitary("3:00pm") // "15:00"
toMilitary("9:15am") // "09:15"
toMilitary("12:00am") // "00:00"
toMilitary("04:00") // "04:00"
*/

const pm = {
  '1': '13',
  '2': '14',
  '3': '15',
  '4': '16',
  '5': '17',
  '6': '18',
  '7': '19',
  '8': '20',
  '9': '21',
  '10': '22',
  '11': '23',
  '12': '12'
}

function toMilitary(time) {
  if (time[time.length - 2] + time[time.length - 1] !== 'pm' && time[time.length - 2] + time[time.length - 1] !== 'am') {
    return time
  }

  if (time[time.length - 2] + time[time.length - 1] === 'pm') {

    if (time[1] !== ':') {
      return pm[time[0] + time[1]] + ':' + time[time.length - 4] + time[time.length - 3]

    }

    return pm[time[0]] + ':' + time[time.length - 4] + time[time.length - 3]
  }

  if (time[time.length - 2] + time[time.length - 1] === 'am') {

    if (time[1] === ':') {
      return "0" + time[0] + ':' + time[time.length - 4] + time[time.length - 3]

    }
    if (time[0] + time[1] === '12') {
      return '00' + ':' + time[time.length - 4] + time[time.length - 3]
    }

    return "0" + time[0] + ':' + time[time.length - 4] + time[time.length - 3]
  }

}
