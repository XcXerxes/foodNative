function setRem () {
  const dpr = window.devicePixelRatio
  const scale = document.documentElement.clientWidth / 750
  document.documentElement.style.fontSize = `${750 / 10 * scale}px`
  document.documentElement.setAttribute('data-dpr', dpr)
}

setRem()
window.addEventListener('resize', setRem, false)
