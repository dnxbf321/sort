/**
 * 排列组合
 */
const permute = (arr, K) => {
  const all = []
  const loop = (restArr, output, leftCount) => {
    if (leftCount === 0) {
      all.push(output)
      return
    }
    for (let i = 0; i < restArr.length; i++) {
      const newOutput = [...output, restArr[i]]
      loop(restArr.slice(i + 1), newOutput, leftCount - 1)
    }
  }
  loop(arr, [], K)
  return all
}
