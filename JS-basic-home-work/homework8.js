// Bài 1: Cho 1 mảng các chuỗi. Viết hàm lọc ra các phần tử có độ dài lớn nhất. 
// Ví dụ với tham số [''aba'', ''aa'', ''ad'', ''c'', ''vcd''] thì kết quả trả về [''aba'', ''vcd''].
function longestElement(arr) {
    var elementLength = [];
    var longestElement = [];
    for (i = 0; i < arr.length; i++) {
        elementLength.push(arr[i].length);
    }
    var maxLength = Math.max(...elementLength);
    for (i = 0; i < arr.length; i++) {
        if (arr[i].length == maxLength) {
            longestElement.push(arr[i]);
        }
    }
    return longestElement;
}


// Bài 2: Viết hàm so sánh mảng, truyền vào 2 mảng bất kỳ (chỉ chứa số nguyên), 
// kết quả trả về là 1 mảng chỉ chứa những phần tử không đồng thời nằm trong 2 mảng truyền vào. 
// Ví dụ truyền vào   [1, 2, 3] và [1, 3, 4, 5, 5] thì kết quả trả về là mảng [2, 4, 5, 5].
function symmetricDifference(arr1, arr2) {
    let specEle = [];
    for (i = 0; i < arr1.length; i++) {
        if (arr2.includes(arr1[i]) == false) {
            specEle.push(arr1[i]);
        }
    }
    for (j = 0; j < arr2.length; j++) {
        if (arr1.includes(arr2[j]) == false) {
            specEle.push(arr2[j]);
        }
    }
    return specEle;
}

// Bài 3: Cho 2 số nguyên dương m và n. Tạo ra 1 mảng 2 chiều m x n là các số nguyên liên tiếp (tính từ 1) 
// theo kiểu ziczac. Ví dụ với m = 3 và n = 4 thì kết quả là mảng 2 chiều như sau
//  [ [1, 2, 3, 4], [8, 7, 6, 5], [9, 10, 11, 12] ].
function twoDimentionArray(m, n) {
    let arr = [...Array(m)].map(x => Array(n).fill(0))
    let x = 1
    for (let i = 0; i < m; i++) {
        if (i % 2 == 0) {
            for (let j = 0; j < n; j++) {
                arr[i][j] = x;
                x++
            }
        }
        else {
            for (let j = n - 1; j >= 0; j--) {
                arr[i][j] = x
                x++
            }
        }
    }
    return arr
}

// Bài 4: Cho 1 mảng các object chứa thông tin sinh viên dạng { name: ''Huy'', gender: ''Male'', age: 20 }.
//  Viết hàm tính ra số tuổi trung bình của toàn bộ sinh viên.
function averageAge(arr) {
    let sumAge = 0;
    for (i = 0; i < arr.length; i++) {
        sumAge += arr[i].age
    }
    let averageAgeResult = sumAge / arr.length;
    return averageAgeResult;
}

// Bài 5: Cho 1 mảng các object chứa thông tin sinh viên dạng { name: ''Huy'', gender: ''Male'', age: 20 }.
//  Viết hàm sắp xếp lại mảng trên theo tuổi học viên từ cao đến thấp.
function decendAge(arr) {
    arr.sort(compare);
    return arr;
}
function compare(a, b) {
    if (a.age < b.age) {
        return 1;
    }
    if (a.age > b.age) {
        return -1;
    }
    return 0;
}

// Bài 6: Cho 1 mảng các object chứa thông tin sinh viên dạng { name: ''Huy'', gender: ''Male'', age: 20 }. 
// Viết hàm sắp xếp lại mảng trên theo tên học viên (không phân biệt hoa thường).
function decendAge(arr) {
    arr.sort(compare);
    return arr;
}
function compare(a, b) {
    if (a.name < b.name) {
        return -1;
    }
    if (a.name > b.name) {
        return 1;
    }
    return 0;
}

// Bài 7: Cho 1 mảng các object chứa thông tin sinh viên dạng { name: ''Huy'', gender: ''Male'', age: 20 }. 
// Viết hàm lọc ra những sinh viên nào có tên bắt đầu bằng chữ ''H'' hoặc ''h''.
function objectStartsWithH(arr) {
    let result = [];
    for (i = 0; i < arr.length; i++) {
        if (arr[i].name.startsWith("H") || arr[i].name.startsWith("h")) {
            result.push(arr[i]);
        }
    }
    return result;
}