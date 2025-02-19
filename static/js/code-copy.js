(() => {
  function createCopyButton(codeNode) {
    const copyBtn = document.createElement('button')
    copyBtn.className = 'code-copy-btn'
    copyBtn.type = 'button'
    copyBtn.innerText = 'Kopiuj'

    let resetTimer
    copyBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(codeNode.innerText).then(() => {
        copyBtn.innerText = 'Skopiowane!'
      }).then(() => {
        clearTimeout(resetTimer)
        resetTimer = setTimeout(() => {
          copyBtn.innerText = 'Kopiuj'
        }, 1000)
      })
    })

    return copyBtn
  }

  document.querySelectorAll('pre > code')
  .forEach((codeNode) => {
    const copyBtn = createCopyButton(codeNode);
    const preNode = codeNode.parentNode
    codeNode.parentNode.insertBefore(copyBtn, codeNode)
  })

  document.querySelectorAll('.highlight table > tbody > tr > td:first-child .code-copy-btn')
  .forEach((btn) => {
    btn.remove()
  })
})()
