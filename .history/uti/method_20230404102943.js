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
