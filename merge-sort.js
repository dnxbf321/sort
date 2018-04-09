/*
* @Author: tungjason
* @Date:   2018-03-22 15:17:50
* @Last Modified by:   tungjason
* @Last Modified time: 2018-03-26 10:24:38
* @Desc: 归并排序
*/

function merge(left, right) {
  let tmp = []
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      tmp.push(left.shift())
    } else {
      tmp.push(right.shift())
    }
  }
  return tmp.concat(left, right)
}

function sort(arr) {
  if (arr.length <= 1) {
    return arr
  }
  let middle = Math.floor(arr.length / 2)
  let left = arr.slice(0, middle)
  let right = arr.slice(middle)
  return merge(sort(left), sort(right))
}

let result = sort([2, 1, 4, 0, 5, 3])
console.log(result)
