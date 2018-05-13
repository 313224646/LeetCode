/**
 * @param {character[][]} board
 * @return {boolean}
 */
/*
nums存储每位数字的下标，非数字跳过，每位数字以对象形式存储
  {index_1, index_2, area}
area记录每位数字所有的区域，按九宫格划分成9个区域 0~8
index_1记录数独所在的横坐标
index_2记录数独所在的纵坐标
最后只需要对比nums数组内每一项的index_1, index_2, area是否有重复即可
 */
var isValidSudoku = function (board) {
  let nums = [[], [], [], [], [], [], [], [], []]
  let area = 0
  for (let [index_1, item_1] of board.entries()) {
    for (let [index_2, item_2] of item_1.entries()) {
      if (index_1 < 3 && index_2 < 3) {
        area = 0
      } else if (index_1 < 3 && index_2 < 6) {
        area = 1
      } else if (index_1 < 3 && index_2 < 9) {
        area = 2
      } else if (index_1 < 6 && index_2 < 3) {
        area = 3
      } else if (index_1 < 6 && index_2 < 6) {
        area = 4
      } else if (index_1 < 6 && index_2 < 9) {
        area = 5
      } else if (index_1 < 9 && index_2 < 3) {
        area = 6
      } else if (index_1 < 9 && index_2 < 6) {
        area = 7
      } else if (index_1 < 9 && index_2 < 9) {
        area = 8
      }
      switch (item_2) {
        case '.':
          break
        case '1':
          nums[0].push({
            index_1,
            index_2,
            area
          })
          break
        case '2':
          nums[1].push({
            index_1,
            index_2,
            area
          })
          break
        case '3':
          nums[2].push({
            index_1,
            index_2,
            area
          })
          break
        case '4':
          nums[3].push({
            index_1,
            index_2,
            area
          })
          break
        case '5':
          nums[4].push({
            index_1,
            index_2,
            area
          })
          break
        case '6':
          nums[5].push({
            index_1,
            index_2,
            area
          })
          break
        case '7':
          nums[6].push({
            index_1,
            index_2,
            area
          })
          break
        case '8':
          nums[7].push({
            index_1,
            index_2,
            area
          })
          break
        case '9':
          nums[8].push({
            index_1,
            index_2,
            area
          })
          break
      }
    }
  }
  let arrIndex_1 = []
  let arrIndex_2 = []
  let arrArea = []
  for (let item of nums) {
    for (let value of item) {
      arrIndex_1.push(value.index_1)
      arrIndex_2.push(value.index_2)
      arrArea.push(value.area)
    }
    if (arrItemSolo(arrIndex_1) && arrItemSolo(arrIndex_2) && arrItemSolo(arrArea)) {
      arrIndex_1 = []
      arrIndex_2 = []
      arrArea = []
    } else {
      return false
    }
  }
  return true
  function arrItemSolo(arr) {
    const toSet = new Set(arr)
    if (arr.length === toSet.size) {
      return true
    } else {
      return false
    }
  }
};

let result = isValidSudoku([
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"]
])
console.log(result)