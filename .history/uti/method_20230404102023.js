function required(value, id) {
  if (value.trim() === "") {
    document.querySelector(`#${id}`).innerHTML = "Vui lòng nhập thông tin vào !";
    document.querySelector(`#${id}`).classList.add("form-control input-sm bg-danger text-white");
    return false;
  }
  return true;
}
