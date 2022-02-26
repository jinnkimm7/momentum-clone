const refresh = document.querySelector("#refresh");

function onClick() {
    window.location.reload();
}

refresh.addEventListener('click', onClick);