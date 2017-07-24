var assert = require("assert");
import JQueue from '../src/index.js'
const maxSize = 5
const js = new JQueue(maxSize)

describe('JQueue test case', function() {
  describe('#constructor() 构造函数', function() {
    it('this.maxSize 是否和构造传入的一样, 当前值为：' + maxSize, function() {
      assert.equal(js.maxSize, maxSize);
    })
    it('this.queue 长度是否为：' + js.queue.length, function() {
      assert.equal(js.queue.length, 0)
    })
  });

  describe('#inqueue 添加入队列', function() {
    it('添加对象到队列', function() {
      let obj = {
        no: 1
      }
      js.inqueue(obj)
      assert.equal(js.first(), obj)
    })
    it('添加对象到已满队列', function() {
      let obj = {
        no: 1
      }
      let obj2 = {
        no: 2
      }
      js.inqueue(obj)

      js.inqueue(obj2)
      js.inqueue(obj2)
      js.inqueue(obj2)
      js.inqueue(obj)
      js.inqueue(obj)

      assert.equal(js.last(), obj)
      //console.log(js.all())
    })
    it('添加一个空对象', function() {
      assert.throws(function() {
        js.inqueue()
        js.inqueue(null)
        js.inqueue(undefined)
      })

    })
    it('添加一个对象，返回当前数组长度', function() {
      js.empty()
      let i = js.inqueue({})
      assert.equal(i, js.length());
    })
  })
  describe('#outqueue 弹出一个出队列', function() {

    it('空队列弹出', function() {
      js.empty()
      assert.equal(js.outqueue(), null)
    })
    it('非空队列弹出', function() {
      js.empty()
      let obj = {
        a: 1
      }
      js.inqueue(obj)
      js.inqueue(obj)
      assert.equal(js.outqueue(), obj)
    })
  })

  describe('#first 获取第一个元素', function() {
    it('空队列获取', function() {
      js.empty()
      assert.equal(js.first(), null)
    })
    it('非空队列获取', function() {
      let obj = {
        abc: 1
      }
      js.inqueue(obj)
      assert.equal(js.first(), obj)

    })
  })

  describe('#last 获取最后一个元素', function() {
    it('空队列获取', function() {
      js.empty()
      assert.equal(js.last(), null)
    })
    it('非空队列获取', function() {
      let obj = {
        abc: 1
      }
      js.inqueue(obj)
      js.inqueue(obj)
      assert.equal(js.last(), obj)

    })
  })

  describe('#empty 清空所有元素', function() {
    it('清空所有元素', function() {
      js.empty()
      assert.equal(js.all().length, 0)
    })
  })

  describe('#all 返回所有元素', function() {
    it('返回所有元素', function() {
      js.empty()
      js.inqueue({})
      js.inqueue({})
      js.inqueue({})
      //console.log(js.all())
    })
  })

  describe('#length 返回队列长度', function() {
    it('返回队列长度', function() {
      js.empty()
      js.inqueue({})
      js.inqueue({})
      js.inqueue({})
      assert.equal(js.length(), 3)
    })
  })

});
