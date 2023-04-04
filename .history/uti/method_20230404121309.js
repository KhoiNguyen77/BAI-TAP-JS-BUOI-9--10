function stringToSlug(title) {
  //Đổi chữ hoa thành chữ thường
  slug = title.toLowerCase();

  //Đổi ký tự có dấu thành không dấu
  slug = slug.replace(/á|à|ả|ạ|ã|ă|ắ|ằ|ẳ|ẵ|ặ|â|ấ|ầ|ẩ|ẫ|ậ/gi, "a");
  slug = slug.replace(/é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ/gi, "e");
  slug = slug.replace(/i|í|ì|ỉ|ĩ|ị/gi, "i");
  slug = slug.replace(/ó|ò|ỏ|õ|ọ|ô|ố|ồ|ổ|ỗ|ộ|ơ|ớ|ờ|ở|ỡ|ợ/gi, "o");
  slug = slug.replace(/ú|ù|ủ|ũ|ụ|ư|ứ|ừ|ử|ữ|ự/gi, "u");
  slug = slug.replace(/ý|ỳ|ỷ|ỹ|ỵ/gi, "y");
  slug = slug.replace(/đ/gi, "d");
  //Xóa các ký tự đặt biệt
  slug = slug.replace(
    /\`|\~|\!|\@|\#|\||\$|\%|\^|\&|\*|\(|\)|\+|\=|\,|\.|\/|\?|\>|\<|\'|\"|\:|\;|_/gi,
    ""
  );
  //Đổi khoảng trắng thành ký tự gạch ngang
  slug = slug.replace(/ /gi, "-");
  //Đổi nhiều ký tự gạch ngang liên tiếp thành 1 ký tự gạch ngang
  //Phòng trường hợp người nhập vào quá nhiều ký tự trắng
  slug = slug.replace(/\-\-\-\-\-/gi, "-");
  slug = slug.replace(/\-\-\-\-/gi, "-");
  slug = slug.replace(/\-\-\-/gi, "-");
  slug = slug.replace(/\-\-/gi, "-");
  //Xóa các ký tự gạch ngang ở đầu và cuối
  slug = "@" + slug + "@";
  slug = slug.replace(/\@\-|\-\@|\@/gi, "");

  return slug;
}

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
  console.log(value);
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
  console.log(stringToSlug(value.trim()));
  if (name.test(stringToSlug(value))) {
    document.querySelector(`#${error}`).innerHTML = "";
    return true;
  } else {
    let tenInput = document.querySelector(`#${id}`).getAttribute("name");
    console.log(tenInput);
    document.querySelector(`#${error}`).innerHTML = `${tenInput} phải là ký tự`;
    document.querySelector(`#${error}`).setAttribute("class", "text-danger");
    return false;
  }
};

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
