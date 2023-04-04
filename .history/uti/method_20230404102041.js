function required(value, id) {
  if (value.trim() === "") {
    document.querySelector(`#${id}`).innerHTML = "Vui lòng nhập thông tin vào !";
    document.querySelector(`#${id}`).classList.add("bg-danger");
    return false;
  }
  return true;
}
