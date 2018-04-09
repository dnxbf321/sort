/*
* @Author: tungjason
* @Date:   2018-03-22 11:24:51
* @Last Modified by:   dengjiayao
* @Last Modified time: 2018-04-09 16:30:59
* @Desc: 快速排序
*/

// 取右侧值为比较基准
// 从左向右依次与基准比较
// 比基准小不动，left + 1
// 比基准大，将该值放置在 right 位置，将 right - 1 位置的值保存在 left 位置，right - 1
// left 和 right 相遇时停止
// 将基准放置在 left 位置，这样比基准小的值都在左侧，比基准大的值都在右侧
function part(arr, left, right) {
  let target = arr[right]
  while (left < right) {
    if (arr[left] <= target) {
      left += 1
    } else if (arr[left] > target) {
      arr[right] = arr[left]
      right -= 1
      arr[left] = arr[right]
    }
  }
  arr[left] = target
  return left
}

function quickSort(arr, left, right) {
  if (left >= right) {
    return
  }
  let pos = part(arr, left, right)
  quickSort(arr, left, pos - 1)
  quickSort(arr, pos + 1, right)
}

function sort(arr) {
  quickSort(arr, 0, arr.length - 1)
  return arr
}

let result = sort([2, 5, 1, 0, 3])
console.log(result)
