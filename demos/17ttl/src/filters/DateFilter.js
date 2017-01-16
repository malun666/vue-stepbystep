export default {
  chineseFormatFilter (val) {
    console.log('...')
    if (!val) return ''
    var dt = new Date(val.toString())
    return dt.getFullYear() + '年' + dt.getMonth() + '月' + dt.getDay() + '日'
  }
}
