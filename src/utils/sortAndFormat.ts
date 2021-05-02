// import moment from 'moment/moment'

export function sortAndFormat (data) {
  data.sort(function (a, b) {
    return b.createtime - a.createtime
  })
  data.map(item => {
    const time = new Date(+item.createtime)
    const year = time.getFullYear()
    const month = time.getMonth() + 1
    const date = time.getDate()
    const hours = time.getHours()
    let minutes: number | string = time.getMinutes()
    if (minutes < 10) {
      minutes = '0' + minutes
    }
    let seconds: number | string = time.getSeconds()
    if (seconds < 10) {
      seconds = '0' + seconds
    }
    item.createtime = `${year}年${month}月${date}日 ${hours}:${minutes}:${seconds}`
  })
  return data
}
