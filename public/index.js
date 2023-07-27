document.getElementById('form').addEventListener('submit', function (e) {
  e.preventDefault();

  let param = document.querySelector('input[name="date"]').value;
  console.log(param);
  window.location.href = 'api/' + param;
});

document.getElementById('baseUrl').innerText = window.location.href;

document.getElementById('exampleRequestUrl').innerText =
  window.location.href + 'api/2015-12-25';
