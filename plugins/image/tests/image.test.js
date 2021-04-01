const test = require('tape')
const wtf = require('./_lib')

test('image-methods', function (t) {
  wtf
    .fetch('casa', {
      lang: 'it',
      wiki: `wiktionary`
    })
    .then(function (doc) {
      let img = doc.image(0)
      img.exists().then((bool) => {
        t.equal(bool, true, 'img exists')

        let url = img.commonsURL()
        t.ok(url, 'commons-url')

        t.end()
      })
    })
})
