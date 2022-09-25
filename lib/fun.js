// variables

let fortunesCookies = [
  'Conquer your fears or they will conquer you',
  'Rivers need springs',
  "Do not fear what your don't know",
  'You will have a pleasant surprise',
  'Whenever possible, keep it simple',
]
exports.getFortune = function () {
  var idx = Math.floor(Math.random() * fortunesCookies.length)
  return fortunesCookies[idx]
}
