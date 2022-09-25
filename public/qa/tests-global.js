const { assert } = require('chai')

suite('GlobalTests', function () {
  test('pagehasavalidtitle', function () {
    assert(
      document.title &&
        document.title.match(/\S/) &&
        document.title.toUpperCase() !== 'TODO'
    )
  })
})
