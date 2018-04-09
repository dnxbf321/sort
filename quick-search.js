/*
* @Author: tungjason
* @Date:   2018-04-09 11:26:35
* @Last Modified by:   dengjiayao
* @Last Modified time: 2018-04-09 16:33:34
* @Desc: 二分查找
*/

function quick(arr, target) {
  let idx = -1
  if (arr.length <= 1) {
    if (arr[0] === target) {
      idx = 0
    }
    return idx
  }

  let middle = Math.floor(arr.length / 2)
  if (target === arr[middle]) {
    idx = middle
  } else if (target < arr[middle]) {
    idx = quick(arr.slice(0, middle), target)
  } else {
    idx = quick(arr.slice(middle + 1), target)
    if (idx !== -1) {
      idx += middle + 1
    }
  }
  return idx
}

let result = quick([1, 3, 6, 8, 16, 19, 20, 28, 38, 100, 160], 160)

console.log(result)
