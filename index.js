function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  const lis = document.getElementById('app').querySelectorAll('.ranked-list li')

  for (let i = 0, l = lis.length; i < l; i++) {
    lis[i].innerHTML = parseInt(lis[i].innerHTML) + n
  }
}

function deepestChild() {
  let current = document.getElementById('grand-node')
  let next = current.children[0]

  while (next) {
    current = next
    next = current.children[0]
  }

  return current
}
