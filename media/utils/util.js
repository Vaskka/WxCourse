const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

const utilMap = (originMin, originMax, val, tarMin, tarMax) => {

  let originalLength = originMax - originMin;
  let targetLegth = tarMax - tarMin;

  let realLength = ((val - originMin) / originalLength) * targetLegth

  return tarMin + realLength;
}


module.exports = {
  formatTime: formatTime,
  utilMap: utilMap
}
