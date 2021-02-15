function decounce(func, wait) {
    let t = null
    return function () {
        t && clearTimeout(t)
        t = setTimeout(() => {
            func.apply(this, arguments)
        }, wait)
    }
}

function decounce_immed(func, wait) {
    let t = null
    return function () {
        t && clearTimeout(t)
        let isFirstClick = !t
        t = setTimeout(() => {
            t = null
        }, wait)
        if (isFirstClick) {
            func.apply(this, arguments)
        }
    }
}

function throttle(func, delay) {
    let begin = 0
    return function () {
        let curr = new Date().getTime
        if (curr - begin > delay) {
            func.apply(this, arguments)
            begin = curr
        }
    }
}

function insertionSort(a) {
    for (let i = 1; i < a.length; i++) {
        const insert = a[i];
        let j = i - 1
        for (; j >= 0; j--) {
            const temp = a[j];
            const unorder = insert > temp
            if (unorder) {
                break
            } else {
                a[j + 1] = a[j]
            }
        }
        a[j + 1] = insert
    }
    return a
}

function quickSort(a) {
    // termin
    if (a.length <= 1) { return a }
    // divide
    const idx = Math.floor(a.length / 2)
    const piv = a.splice(idx, 1)[0]
    let left = [], right = []
    for (let i of a) {
        if (i < piv) {
            left.push(i)
        } else {
            right.push(i)
        }
    }
    // conquer and generate result
    return [...quickSort(left), piv, ...quickSort(right)]
}

function quickSort_inplace(a) {
    sort(a, 0, a.length - 1)
    function sort(a, left, right) {
        if (left < right) {
            idx = part(a, left, right)
            sort(a, left, idx - 1)
            sort(a, idx + 1, right)
        }
    }
    function part(a, left, right) {
        let [i, j] = [left, right]
        let piv = a[i]
        while (i < j) {
            while (i < j && a[j] >= piv) { j-- }
            if (i < j) { a[i] = a[j] }
            while (i < j && a[i] <= piv) { i++ }
            if (i < j) { a[j] = a[i] }
        }
        a[i] = piv
        return i
    }
    return a
}