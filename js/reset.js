const reset = document.querySelector("#reset");

function handleClick() {
  localStorage.removeItem('username');
  localStorage.removeItem('todos');
  location.reload();
}

reset.addEventListener('click', handleClick);