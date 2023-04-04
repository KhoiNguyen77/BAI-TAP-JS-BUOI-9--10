function required(value, id) {
  if (value.trim() === "") {
    document
      .querySelector(`#${id}`)
      .setAttribute("placeholder", "Không được bỏ trống");
    document.querySelector(`#${id}`).classList.add("bg-danger");
    return false;
  }
  return true;
}
function checkEmail(value, id) {
  let mailformat =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\ [[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (mailformat.test(value)) {
    return true;
  } else {
    document
      .querySelector(`#${id}`)
      .setAttribute("placeholder", "Email không hợp lệ");
    document.querySelector(`#${id}`).classList.add("bg-danger");
  }
}

function checkLuong(value, id) {
  let numbers = /^[0-9]+$/;
  if (numbers.test(value)) {
    if (value >= 1000000 && value <= 20000000) {
      return true;
    } else {
      document
        .querySelector(`#${id}`)
        .setAttribute("placeholder", "Lương chỉ từ 1.000.000 đến 20.000.000");
      document.querySelector(`#${id}`).classList.add("bg-danger");
      return false;
    }
  } else {
    return false;
  }
}
