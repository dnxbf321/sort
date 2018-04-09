/*
* @Author: tungjason
* @Date:   2018-03-26 11:02:46
* @Last Modified by:   dengjiayao
* @Last Modified time: 2018-04-09 16:28:46
* @Desc: 冒泡排序
*/

function sort(arr) {
  let len = arr.length
  if (len <= 1) {
    return arr
  }
  let t = 0
  while (t < len) {
    for (let i = len - 1; i > t; i--) {
      if (arr[i - 1] > arr[i]) {
        let tmp = arr[i]
        arr[i] = arr[i - 1]
        arr[i - 1] = tmp
      }
    }
    t++
  }
  return arr
}

let result = sort([2, 1, 4, 8, 0, 3])
console.log(result)
