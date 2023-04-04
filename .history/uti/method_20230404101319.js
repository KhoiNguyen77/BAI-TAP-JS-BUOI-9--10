function required(value) {
  if (value.trim() === "") {
    document.querySelector("#tknv").setAttribute("placeholder", "Không được bỏ trống");
    document.querySelector("#tknv").classList.add("bg-danger");
    return false;
  }
  return true;
}
