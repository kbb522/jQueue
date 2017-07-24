/**
JQueue队列，一款简易队列小应用
开发背景：移动应用中，客户端要记录每一个客户的操作记录，就诞生了这个。
作者：Michael.xu
时间：2017-7-21
*/
class JQueue {
  constructor (maxSize) {
    this.queue = []
    this.maxSize = maxSize || 5
  }

  inqueue (obj) {
    if (!obj) {
      throw new Error('you must input a object for params. ps: no null, no undefined')
    }
    if (this.queue.length >= this.maxSize) {
      let t = this.queue.length - this.maxSize
      t = t + 1
            // 裁剪数组，为加入的数据腾空间
      this.queue.splice(0, t)
    }
    return this.queue.push(obj)
  }
  outqueue () {
    return this.queue.length > 0
            ? this.queue.shift()
            : null
  }
  first () {
    return this.queue.length > 0
            ? this.queue[0]
            : null
  }
  last () {
    return this.queue.length > 0
            ? this.queue[this.queue.length - 1]
            : null
  }
  empty () {
    return this.queue.length = 0
  }
  all () {
    return this.queue
  }
  toString () {
    let string = ''
    this.queue.map(function (element, index, arr) {
      string += element.toString()
    })
    return string
  }
  length () {
    return this.queue.length
  }
}

export default JQueue
