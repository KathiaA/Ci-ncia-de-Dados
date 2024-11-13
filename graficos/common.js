const getCSS = (variavel) => {
    return getComputedStyle(document.body).getPropertyValue(variavel)
  }
  color: getCSS('-primary-color'),
size: 16,
family: getCSS('--font')
}
  
  export {getCSS, tickConfig}