/*
* @Author: tungjason
* @Date:   2018-03-22 10:23:36
* @Last Modified by:   tungjason
* @Last Modified time: 2018-04-09 10:41:31
* @Desc: 插入排序
*/
// 通过比较找到合适的位置插入元素来达到排序的目的的
// 打扑克牌的经历，特别是牌数较大的。在分牌时可能要整理自己的牌，牌多的时候怎么整理呢？就是拿到一张牌，找到一个合适的位置插入。
function insertSort(arr) {
  if (arr.length === 1) {
    return arr
  }
  for (let i = 1, len = arr.length; i < len; i++) {
    let target = arr[i] // 待插入
    let j = i
    while (j > 0 && target < arr[j - 1]) {
      // 逐个比较右移
      arr[j] = arr[j - 1]
      j--
    }
    arr[j] = target
  }
  return arr
}
let result = insertSort([2, 1, 5, 3, 6, 9, 0])
console.log(result)
