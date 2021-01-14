// Bài 1: Viết chương trình JavaScript để lấy một phần tử ngẫu nhiên từ một mảng
// sample([3, 7, 9, 11]) => 3
// sample([3, 7, 9, 11]) => 9
function getRandomNumber(array) {
    return array[Math.random() * array.length | 0];
}

// Bài 2: Viết chương trình đổi chỗ ngẫu nhiên vị trí của các phần tử trong mảng
function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}
var myArray = [1, 3, 5, 7, 9, 11]

// Bài 3: Viết chương trình JavaScript để lấy một mảng các phần tử xuất hiện trong cả hai mảng
// similarity([1, 2, 3], [1, 2, 4]) => [1,2]
function similarity(arr1, arr2) {
    let sameEle = [];
    for (i = 0; i < arr1.length; i++) {
        if (arr2.includes(arr1[i])) {
            specEle.push(arr1[i]);
        }
    }
    return sameEle;
}

// const similarity = (arr, values) => arr.filter(v => values.includes(v));
// console.log(similarity([1, 2, 3], [1, 2, 4]))

// Bài 4: Viết một chương trình JavaScript để lấy sự phần tử không xuất hiện ở cả 2 mảng
// symmetricDifference([1, 2, 3], [1, 2, 4]) => [3,4]
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

// Bài 5: Viết function lấy tất cả các phần tử không trùng nhau trong cả 2 mảng
// union([1, 2, 3], [4, 3, 2]) => [1,2,3,4]
// union([1, 2, 3], [1, 2, 3]) => [1,2,3]
function union(arr1, arr2) {
    let a = arr1.concat(arr2);
    let b = a.sort();
    for (i = 0; i < b.length; i++) {
        if (b[i] == b[i + 1]) {
            b.splice(i + 1, 1);
        }
    }
    return b;
}

// Bài 6: Viết chương trình JavaScript để tạo mã màu HEX ngẫu nhiên.
// random_hex_color_code()
function rndHexColorCode() {
    let a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let b = ["#"];
    for (i = 0; i < 6; i++) {
        b.push(a[Math.floor(Math.random() * 15)]);
    }
    let c = b.join("");
    return c;
}

// Bài 7: Viết một chương trình JavaScript trả về một tập hợp con của một chuỗi.
// sub_String("dog") => ["d","do","dog","o","og","g"]

function sub_String(str) {
    let a = [];
    for (i = 0; i <= str.length; i++) {
        for (j = i; j <= str.length; j++) {
            if (str.substring(j, i) != "") {
                a.push(str.substring(j, i));
            }
        }
    }
    return a;
}

// Bài 8: Kiểm tra mảng xem có phải mảng tăng dần hay không
function checkArrayForward(arr) {
    for (i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i + 1]) {
            return false;
        }
    }
    return true;
}

// Bài 9: Kiểm tra mảng xem có phải mảng sô lẻ giảm dần hay không
function checkArrayDecrease(arr) {
    for (i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            return false;
        }
        if (arr[i] < arr[i + 1]) {
            return false;
        }
    }
    return true;
}

// Bài 10: Cho 1 số nguyên, hãy viết hàm sắp xếp lại các chữ số trong số nguyên đó 
// sao cho ra 1 số nhỏ nhất có thể (không tính số 0 đầu tiên). Ví dụ với tham số 53751 thì kết quả là 13557.
function convertSmallestNumber(num) {
    let a = num.toString();
    let b = a.split("");
    let c = b.sort();
    let d = c.join("");
    let e = parseInt(d)
    return e;
}