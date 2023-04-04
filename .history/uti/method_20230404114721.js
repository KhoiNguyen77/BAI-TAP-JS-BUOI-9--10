// Check để trống cho ký tự
required = (value, id, error) => {
  if (value.trim() === "") {
    let tenInput = document.querySelector(`#${id}`).getAttribute("name");
    console.log(tenInput);
    document.querySelector(
      `#${error}`
    ).innerHTML = `${tenInput} không được để trống`;
    document.querySelector(`#${error}`).setAttribute("class", "text-danger");
    return false;
  } else {
    document.querySelector(`#${error}`).innerHTML = "";
    return true;
  }
};
// Check để trống cho số

numberRequired = (value, id, error) => {
    if (value === 0) {
      let tenInput = document.querySelector(`#${id}`).getAttribute("name");
      console.log(tenInput);
      document.querySelector(
        `#${error}`
      ).innerHTML = `${tenInput} không được để trống`;
      document.querySelector(`#${error}`).setAttribute("class", "text-danger");
      return false;
    } else {
      document.querySelector(`#${error}`).innerHTML = "";
      return true;
    }
  };
// Check độ dài
lengthCheck = (value, id, error, minLength, maxLength) => {
  if (value.trim().length < minLength || value.trim().length > maxLength) {
    let tenInput = document.querySelector(`#${id}`).getAttribute("name");
    document.querySelector(
      `#${error}`
    ).innerHTML = `${tenInput} phải từ 0${minLength} đến 0${maxLength} ký tự`;
    document.querySelector(`#${error}`).classList.add("text-danger");
    return false;
  } else {
    document.querySelector(`#${error}`).innerHTML = "";
    return true;
  }
};

// Check tên nhân viên

nameCheck = (value, id, error) => {
    let name = /^[A-Za-z]+$/;
    if (name.test(value)) {
        document.querySelector(`#${error}`).innerHTML = "";
        return true;
    }
    else {
        let tenInput = document.querySelector(`#${id}`).getAttribute("name");
        console.log(tenInput);
        document.querySelector(`#${error}`).innerHTML = `${tenInput} phải là ký tự`;
        document.querySelector(`#${error}`).setAttribute("class", "text-danger");
        return false;
    }
} 

// Check email

checkEmail = (value, id, error) => {
  let mailformat =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\ [[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (mailformat.test(value)) {
    document.querySelector(`#${error}`).innerHTML = "";
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
      document.querySelector(`#${error}`).innerHTML = "";
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
      document.querySelector(`#${error}`).innerHTML = "";
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
