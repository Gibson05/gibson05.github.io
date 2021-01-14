// Bài 1. Viết 1 function kiểm tra 1 chuỗi có nằm trong chuỗi còn lại hay không. Nếu có trả về true, nếu không trả về false
// - Đầu vào có 2 tham số: Tham số 1 là chuỗi ban đầu, tham số 2 là chuỗi cần kiểm tra
function checkStringExist(str1, str2) {
    return str1.includes(str2)
}
// Bài 2. Viết hàm rút ngắn chuỗi bằng cách cắt ra 8 ký tự đầu của 1 chuỗi và thêm dấu ba chấm ở cuối chuỗi. 
function shortString(b) {
    var a = b.slice(0, 9) + "..."
    return a
}
let strxin = shortString("xin chao cac ban")
console.log(name)

// let shortString = (b) => `${b.slice(0,8)}...`
// console.log(shortString("Xin Chao Cac Ban"))

// Bài 3.  Viết hàm có tác dụng biến 1 chuỗi thành chỉ viết hoa từ đầu tiên. 
function uppercaseFirstLetter(str) {
    var splStr = str.split('');
    for (var i = 0; i < splStr.length; i++) {
        if (i === 0) {
            splStr[i] = splStr[i].toUpperCase();
        }
        else {
            if (splStr[i] === " ") {
                splStr[i + 1] = splStr[i + 1].toUpperCase();
            }
        }
    }
    return splStr.join('');
}


// Bài 4. Cho 1 chuỗi, hãy viết hàm có tác dụng sao chép đó chuỗi lên 10 lần.
function repStr(str, num) {
    var result = str.repeat(num);
    return result;
}
console.log(repStr("Hello!", 10))

// Bài 5. Cho 1 chuỗi, hãy viết hàm có tác dụng sao chép đó chuỗi lên 10 lần, ngăn cách nhau bởi dấu gạch ngang. 
function repeatx10(str) {
    var strClone = str + "/"
    strClone = strClone.repeat(10)
    var arr = strClone.split("/")
    arr.pop()
    strClone = arr.join('-')
    return strClone
}
console.log(repeatx10("Hieu"))

// const repeatString = (str="abc") => {
//     let result = ""
//     for (let i = 0; i < 10; i++) {
//         result += `${str}-`     
//     }
//     return result.slice(0,result.length - 1)
// }

// Bài 6. Cho 1 chuỗi và 1 số nguyên n > 1, hãy viết hàm có tác dụng sao chép đó chuỗi lên n lần, ngăn cách nhau bởi dấu gạch ngang. 
function repeatString(str = "abc", num = 2) {
    var result = str;
    for (var i = 0; i < num - 1; i++) {
        result += "-" + str
    }
    return result
}

// const repeatString = (str="abc", num=1) => {
//     let result = str;
//     for (let i = 0; i<num-1; i++) {
//         result += `-${str}`
//     }
//     return result;
// }

console.log(repeatString("ab", 5))


// Bài 7. Viết hàm đảo ngược chuỗi. Viết dunction với đầu vào là 1 chuỗi string. Trả về chuỗi đảo ngược của chuỗi đó
function reverseString(str) {
    var Str1 = str.split("").reverse().join("")
    return Str1;
}


// Bài 8. Cho 1 chuỗi, kiểm tra xem chuỗi đó có phải chuỗi đối xứng hay không (đọc xuôi hay ngược đều như nhau, không tính khoảng trắng, không phân biệt hoa thường), kết quả trả về true hoặc
function revstr(name) {
    var name1 = name.split("").reverse().join("")
    return name1 == name;
}
var name = "racecar"
console.log(revstr(name))

// Bài 9. Viết hàm tìm ra số nhỏ nhất trong mảng các số.
function biggestNumber(arr) {
    var min = Math.min(...arr);
    return min;
}

// Bài 10. Viết hàm tìm ra số lớn thứ nhì trong mảng các số. Ví dụ:
function secondBiggestNumber(arr) {
    var sortarr = arr.sort();
    for (var i = sortarr.length - 1; i >= 0; i--) {
        if (sortarr[i - 1] < sortarr[i]) {
            return sortarr[i - 1];
        }
    }
}

function secondBiggestNumber(arr) {
    var sortarr = arr.sort().reverse();
    for (var i = 0; i < sortarr.length; i++) {
        if (sortarr[i] > sortarr[i + 1]) {
            return sortarr[i + 1];
        }
    }
}

// Bài 11. Viết hàm truyền vào 1 mảng tên học viên, sắp xếp lại mảng này theo chiều ngược của bảng chữ cái. Ví dụ:
// sortStudents(['Nam', 'Hoa', 'Tuấn']) => Kết quả trả về là ['Tuấn', 'Nam', 'Hoa']
function reverseSortStudents(arr) {
    let a = arr.sort().reverse();
    return a;
}

// Bài 12. Tính tổng các số chia hết cho 5 từ 0 -> 100
function divisibleByFive() {
    var sumdiv5 = 0
    for (i = 0; i < 100; i++) {
        if (i % 5 == 0)
            sumdiv5 += i;
    }
    return sumdiv5;
}

function divisibleByFive() {
    var sumdiv5 = 0;
    for (i = 0; i < 100; i + 5) {
        sumdiv5 += i;
    }
    return sumdiv5;
}

// Bài 13. Viết hàm cho phép truyền vào 1 mảng các số, 
// kết quả trả về là 1 mảng mới với các số là số dư tương ứng khi chia mảng cũ cho 2
function divideToTwo(arr) {
    var divto2 = [];
    for (i = 0; i < arr.length; i++) {
        divto2.push(arr[i] % 2);
    }
    return divto2;
}

// Bài 14. Cho 1 mảng các chuỗi. Viết hàm lọc ra các phần tử có độ dài lớn nhất. Ví dụ với tham số
// [''aba'', ''aa'', ''ad'', ''c'', ''vcd''] thì kết quả trả về [''aba'', ''vcd''].
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