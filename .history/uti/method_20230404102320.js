function required(value, id) {
  if (value.trim() === "") {
    document.querySelector(`#${id}`).setAttribute("placeholder", "Không được bỏ trống");
    document.querySelector(`#${id}`).classList.add("bg-danger");
    return false;
  } else (value === 0) {
    return false;
  }
  return true;
}
