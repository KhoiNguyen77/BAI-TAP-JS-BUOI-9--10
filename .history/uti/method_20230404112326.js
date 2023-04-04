// Check để trống
required = (value, id, error) => {
  if (value.trim() === "") {
    let tenInput = document.querySelector(`#${id}`).getAttribute("name");
    console.log(tenInput);
    document.querySelector(
      `#${error}`
    ).innerHTML = `${tenInput} không được để trống`;
    document.querySelector(`#${error}`).setAttribute("class", "text-danger");
    return false;
  }
  return true;
};
// Check độ dài
lengthCheck = (value, id, error, minLength, maxLength) => {
  if (value.trim().length < minLength || value.trim().length > maxLength) {
    let tenInput = document.querySelector(`#${id}`).getAttribute("name");
    document.querySelector(
      `#${error}`
    ).innerHTML = `${tenInput} phải từ ${minLength} đến ${maxLength}`;
    return false;
  }
};

// Check email

checkEmail = (value, id, error) => {
  let mailformat =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\ [[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (mailformat.test(value)) {
    return true;
  } else {
    let tenInput = document.querySelector(`#${id}`).getAttribute("name");
    console.log(tenInput);
    document.querySelector(`#${error}`).innerHTML = `${tenInput} không hợp lệ`;
    document.querySelector(`#${error}`).setAttribute("class", "text-danger");
    return false;
  }
};

// Check lương

checkLuong = (value, id, error) => {
  let numbers = /^[0-9]+$/;
  if (numbers.test(value)) {
    if (value >= 1000000 && value <= 20000000) {
      return true;
    } else {
      let tenInput = document.querySelector(`#${id}`).getAttribute("name");
      document.querySelector(
        `#${error}`
      ).innerHTML = `${tenInput} phải từ 1.000.000 đến 20.000.000 VNĐ`;
      document.querySelector(`#${error}`).setAttribute("class", "text-danger");
      return false;
    }
  } else {
    document;
    let tenInput = document.querySelector(`#${id}`).getAttribute("name");
    document.querySelector(`#${error}`).innerHTML = `${tenInput} không hợp lệ`;
    document.querySelector(`#${error}`).setAttribute("class", "text-danger");
    return false;
  }
};

// Check giờ làm
checkGioLam = (value, id, error) => {
  let numbers = /^[0-9]+$/;
  if (numbers.test(value)) {
    if (value >= 80 && value <= 200) {
      return true;
    } else {
      let tenInput = document.querySelector(`#${id}`).getAttribute("name");
      console.log(tenInput);
      document.querySelector(
        `#${error}`
      ).innerHTML = `${tenInput} phải từ 80 đến 200 giờ`;
      document.querySelector(`#${error}`).setAttribute("class", "text-danger");
      return false;
    }
  } else {
    let tenInput = document.querySelector(`#${id}`).getAttribute("name");
    document.querySelector(`#${error}`).innerHTML = `${tenInput} không hợp lệ`;
    document.querySelector(`#${error}`).setAttribute("class", "text-danger");
    return false;
  }
};
