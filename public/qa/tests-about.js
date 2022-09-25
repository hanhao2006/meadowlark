const { assert } = require('chai')

suite('"about" Page Tests', function () {
  test('pageshouldcontainlinktocontactpage', function () {
    assert($('a[href="/contact"]').length)
  })
})
