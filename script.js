function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
  }

  if (html.classList.contains("light")) {
    img.setAttribute(
      "alt",
      "foto do otavio de camisa vermelha com o celular na mao"
    )
  } else {
    img.setAttribute(
      "alt",
      "foto do otavio sorrindo usando um moletom preto dentro de um carro"
    )
  }
}
