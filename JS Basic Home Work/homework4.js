// Bài 1: Viết một hàm JavaScript để lấy ngày hiện tại
// Lưu ý: Truyền dấu phân tách làm đối số.
// getCurrentDate("/") => 17/08/2020

function getCurrentDate() {
    let a = new Date();
    let b = a.getDate() + "/" + (a.getMonth() + 1) + "/" + a.getFullYear();
    return b;
}
// Bài 2: Viết một hàm JavaScript để lấy số ngày trong tháng
// getDaysInMonth(8, 2020) => 31
function getDaysInMonth(month, year) {
    let a = new Date(year, month, 0);
    let b = a.getDate();
    return b;
}

// Bài 3: Viết một hàm JavaScript để kiểm tra xem một ngày có phải là ngày cuối tuần hay không.
function checkWeekend(date, month, year) {
    let a = new Date(year, (month - 1), date);
    let b = a.getDay();
    if (b == 0 || b == 5 || b == 6) {
        return true;
    }
    return false;
}

// Bài 4: Viết một hàm JavaScript sẽ trả về số giờ và phút theo số phút truyền vào
function convertMinutes(num) {
    let a = Math.floor(num/60);
    let b = num % 60;
    let c = a + " hours " + b + " minutes."
    return c;
}

// Bài 5: Viết một hàm JavaScript để đếm số ngày đã trôi qua kể từ đầu năm.
function dayPassInYear (date, month, year) {
    let a = new Date(year, 0, 1);
    let b = new Date(year, (month-1), date)
    let c = 86400000 // miliseconds of a day
    let d = (b - a) / c;
    return d;
}

// Bài 6: Viết chương trình JavaScript để tính tuổi.
// calculate_age(new Date(1982, 11, 4))
function age(date, month, year) {
    let a = new Date();
    let b = new Date(year, month, date);
    let c = 86400000;
    let d = (a - b) / c;
    let e = Math.floor(d/365);
    return e;
}

// Bài 7: Viết một hàm JavaScript để lấy ngày bắt đầu của tuần.
// let dt = new Date();
// startOfWeek(dt)
function startOfWeek (date, month, year) {
    var a = new Date(year, (month-1), date)
    var day = a.getDay() || 7;  
    if( day !== 1 ) {
        a.setHours(-24 * (day - 1)); 
    }
    let b = a.getDate() + "/" + (a.getMonth()+1) + "/" + a.getFullYear();
    return b;
}

// Bài 8: Viết một hàm JavaScript để lấy ngày kết thúc tháng
// dt = new Date();
// endOfMonth(dt);
function endOfMonth(month, year) {
    let a = new Date(year, month, 0);
    let b = a.getDate();
    return b;
}

// Bài 9: Viết hàm đếm ngược thời gian đến tết dương lịch
function countdownToNewYear (date, month, year) {
    let a = new Date(year, (month-1), date);
    let b = new Date((year + 1), 0, 1);
    let c = 86400000;
    let d = (b - a) / c;
    return d;
}

// Bài 10: Viết hàm có 2 tham số, tham số đầu tiên là 1 chuỗi thời gian t dạng ''giờ:phút:giây'', 
// tham số thứ 2 là 1 số x <= 1000. Kết quả trả về là 1 chuỗi biểu thị thời gian sau x giây kể từ thời điểm t. 
// Ví dụ với t = ''9:20:56'' và x = 7 thì kết quả là ''9:21:3''
function addSeconds (hour, minute, second, x) {
    let a = new Date(2020, 09, 02, hour, minute, (second + x));
    let b = a.getHours() + ":" + a.getMinutes() + ":" + a.getSeconds();
    return b;
}