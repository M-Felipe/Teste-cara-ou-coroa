function cara_or_coroa() {
  x = Math.floor(Math.random() * 2)

  if (x == 0) {
    document.getElementById('moeda').src = './img/cara.png'
  } else {
    document.getElementById('moeda').src = './img/coroa.png'
  }
}
