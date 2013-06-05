var test = require("tape")

var jenkinsTest = require("../index")

test("jenkinsTest is a function", function (assert) {
    assert.equal(typeof jenkinsTest, "function")
    assert.equal(jenkinsTest.hello, "hello")
    assert.end()
})
