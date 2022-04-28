document.getElementById('form').addEventListener("submit", function (e) {
    e.preventDefault()

    let param = document.querySelector('input[name="date"]').value;
    console.log(param);
    window.location.href = 'api/' + param;
})