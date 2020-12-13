// ●  Bài 1: Viết hàm chuyển đổi nhiệt độ từ độ C sang độ F, tham số truyền vào là 1 số nguyên biểu thị độ C. 
// Ví dụ tham số truyền vào là -30 thì kết quả trả về là -22.
function convertCelciusToFahrenheit(number) {
    let f = (9 / 5 * number) + 32;
    return f
}

// ●  Bài 2: Cho 1 mảng có độ dài lớn hơn 2, chứa các số khác nhau. Hãy viết hàm tìm ra số lớn thứ nhì trong mảng.
function secondBiggestNumber(arr) {
    var sortarr = arr.sort().reverse();
    for (var i = 0; i < sortarr.length; i++) {
        if (sortarr[i] > sortarr[i + 1]) {
            return sortarr[i + 1];
        }
    }
}

// ●  Bài 3: Cho 1 mảng các chuỗi bất kỳ có độ dài khác nhau. Hãy viết hàm tìm ra chuỗi có độ dài lớn nhất.
function longestElement(arr) {
    var elementLength = [];
    var longestElement = [];
    for (i = 0; i<arr.length; i++) {
        elementLength.push(arr[i].length);
    }
    var maxLength = Math.max(...elementLength);
    for (i = 0; i<arr.length; i++) {
        if (arr[i].length == maxLength){
            longestElement.push(arr[i]);
        }
    }
    return longestElement;
}

// ●  Bài 4: Viết hàm có 2 tham số là 2 chuỗi string và target khác rỗng, dùng để kiểm tra chuỗi string có kết
// thúc bởi chuỗi target hay không. Kết quả trả về là true hoặc false.
function checkEndsWith(string, target) {
    if (string == '' || target == '') {
        return false
    }
    if (string != '' && target != '') {
        let str = string.toLowerCase()
        let tar = target.toLowerCase()
        if (str.endsWith(tar)) {
            return true
        }
        else {
            return false
        }
    }
}

// ●  Bài 5: Cho 1 mảng chỉ chứa các phần tử có kiểu dữ liệu number, string và boolean. Hãy kiểm tra xem
// trong mảng đó có phần tử nào bị lặp lại hay không (xuất hiện 2 lần trở lên). Kết quả trả về true (nếu lặp)
//  hoặc false (nếu không lặp).
function checkDuplicate(arr) {
    for (i = 0; i <= arr.length; i++) {
        if (arr.indexOf(arr[i]) == arr.lastIndexOf(arr[i])) {
            return false
        }
        else {
            return true
        }
    }
}