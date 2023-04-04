function required(value, id, prop) {
  if (value.trim() === "") {
    let tenInput = document.querySelector(`#${id}`).getAttribute("name");
    console.log(tenInput);
    document.querySelector(`#${id}`).innerHTML = `${tenInput} không hợp lệ`;
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
    document
      .querySelector(`#${id}`)
      .setAttribute("placeholder", "Lương không hợp lệ");
    return false;
  }
}
function checkGioLam(value, id) {
  let numbers = /^[0-9]+$/;
  if (numbers.test(value)) {
    if (value >= 80 && value <= 200) {
      return true;
    } else {
      document
        .querySelector(`#${id}`)
        .setAttribute("placeholder", "Giờ làm phải từ 80 đến 200 giờ");
      document.querySelector(`#${id}`).classList.add("bg-danger");
      return false;
    }
  }
  if (!numbers.test(value)) {
    document.querySelector(`#${id}`).innerHTML = "Số giờ không hợp lệ";
    return false;
  }
}
