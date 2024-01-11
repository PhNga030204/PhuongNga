function ktraChanLe(number) {
    if (isNaN(number)) {
        return "Vui lòng nhập số hợp lệ.";
    } else {
        return number % 2 === 0 ? "Đây là số chẵn." : "Đây là số lẻ.";
    }
}
var userInput = prompt("Nhập một số:");
var userNumber = parseFloat(userInput);
alert(ktraChanLe(userNumber));