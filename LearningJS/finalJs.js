function clearText() {
  document.getElementById('reminder').value = '';
  document.getElementById('detail').value = '';
}

function addCard() {
  var title = document.getElementById('reminder').value;
  var detail = document.getElementById('detail').value;
  var myNewCard = '<div class="col-sm-3">' +
    '<div class="card">' +
    '<h5 class="card-header">' + title + '</h5>' +
    '<div class="card-body">' +
    '<p class="card-text">' + detail + '</p>' +
    '</div>' +
    '</div>' +
    '</div>';


  //document.getElementById('myCards').innerHTML = myNewCard + document.getElementById('myCards').innerHTML;
  document.getElementById('myCards').innerHTML += myNewCard;
  clearText();
}