
let weekdays = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"]
let allhours = ["10:00-11:30", "11:30-13:00", "13:00-14:30", "14:30-16:00", "16:00-17:30", "17:30-19:00", "19:00-20:30", "20:30-21:00"]
let temphours = [10, 11.5, 13, 14.5, 16, 17.5, 19, 20.5]
var calculateDays = function calculateDays() {
  var days = []
  var date = new Date()
  var weekday = date.getDay()
  var day = date.getDate()
  var month = date.getMonth() + 1
  var year = date.getFullYear()
  var monthDays = new Date(year, month, 0).getDate()
  for (var i = 0; i < 7; i++) {
    var formatday = ""
    if (i === 0) {
      if (day <= monthDays && weekday <= 6) {
        formatday = month + "月" + day + "日" + "  " + "今天"
      } else if (day > monthDays && weekday <= 6) {
        month += 1
        day = day - monthDays
        formatday = month + "月" + day + "日" + "  " + "今天"
      } else if (day <= monthDays && weekday > 6) {
        weekday = weekday - 7
        formatday = month + "月" + day + "日" + "  " + "今天"
      } else {
        month += 1
        day = day - monthDays
        weekday = weekday - 7
        formatday = month + "月" + day + "日" + "  " + weekdays[weekday]
      }
    } else {
      if (day <= monthDays && weekday <= 6) {
        formatday = month + "月" + day + "日" + "  " + weekdays[weekday]
      } else if (day > monthDays && weekday <= 6) {
        month += 1
        day = day - monthDays
        formatday = month + "月" + day + "日" + "  " + weekdays[weekday]
      } else if (day <= monthDays && weekday > 6) {
        weekday = weekday - 7
        formatday = month + "月" + day + "日" + "  " + weekdays[weekday]
      } else {
        month += 1
        day = day - monthDays
        weekday = weekday - 7
        formatday = month + "月" + day + "日" + "  " + weekdays[weekday]
      }
    }

    days.push({
      day: formatday,
      chosen: false
    })
    day++
    weekday++
  }
  return days

}

var calculateHours = function calculateHours() {
  var date = new Date()
  var cur_hour = date.getHours()
  console.log(cur_hour)
  var pos = 0
  var hours = []
  var hour = []
  while (temphours[pos] < cur_hour) {
    pos++
  }
  console.log(allhours[pos])
  for (var i = 0; i < 7; i++) {
    hour = []
    if (i === 0) {
      for (var j = pos; j < 8; j++) {
        hour.push(allhours[j])
      }
    }else{
      for (var j = 0; j < 8; j++) {
        hour.push(allhours[j])
      }
    }
    hours.push(hour)
  }
  return hours
}



module.exports = {
  calculateDays: calculateDays,
  calculateHours: calculateHours
}