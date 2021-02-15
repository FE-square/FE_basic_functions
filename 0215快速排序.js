// 快速排序：分治法 是递归编程范式的一种具体实现
// 递归：1.终止 2.处理当前层 3.下一层 4.如果需要 回溯
// 分治：1.终止 2.大问题拆成小问题 3.分别解决小问题 3.5如果需要 回溯 4.合并小问题 生成答案
function quickSort(a) { // 阮一峰
    if (a.length <= 1) { return a }

    let idx = Math.floor(a.length / 2)
    let piv = a.splice(idx, 1)[0]
    let left = [], right = []

    for (let item of a) {
        if (item < piv) {
            left.push(item)
        } else {
            right.push(item)
        }
    }

    return [...quickSort(left), piv, ...quickSort(right)]
}
// 原地快排写法：
function quickSort_inplace(a) {
    sort(a, 0, a.length - 1)

    function sort(a, left, right) {
        if (right > left) {
            let piv_idx = part(a, left, right)//将arr内的元素 变为 一半小于arr[left] 一半大于arr[left]
            sort(a, left, piv_idx - 1)
            sort(a, piv_idx + 1, right)
        }
    }

    function part(a, left, right) {
        let piv = a[left]
        let i = left, j = right
        // 一边交换 一边找piv_idx
        while (i < j) {
            // 找到j在哪
            while (i < j && a[j] >= piv) {
                j--
            }
            // 把a[j]复制到i位置
            if (i < j) {
                a[i] = a[j]
            }
            // 找到i在哪
            while (i < j && a[i] <= piv) {
                i++
            }
            // 把a[i]复制到j位置
            if (i < j) {
                a[j] = a[i]
            }
        }
        a[i] = piv
        return i
    }

    return a
}