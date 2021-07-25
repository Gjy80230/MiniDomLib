const div = dom.create("<div>newDiv</div>");
const div1 = dom.create("<div>div1</div>");
const div2 = dom.create("<div>div2</div>");
// console.log(div1)

dom.after(test, div1)
dom.wrap(window.testPlus, div2)
dom.remove(div1)

console.log(dom.empty(empty))

dom.attr(test, 'title', 'I am Gene')
let title = dom.attr(test, 'title')
console.log(`title: ${title}`)

// dom.text(test, '这是个文本')

dom.style(test2, {background: 'blue', color: 'red'})
console.log(dom.style(test2, 'color'))
dom.style(test2, 'border', '1px solid black')

dom.class.add(test2, 'red')
dom.class.add(test2, 'blue')

dom.class.remove(test2, 'blue')
console.log(dom.class.has(test2, 'blue'))

let fn = ()=>{
    console.log('点击了')
}
dom.on(test, 'click', fn)

dom.off(test, 'click', fn)

let divTest = dom.find('#test')[0]


console.log(dom.find('.red', divTest)[0])
console.log(dom.parent(test))

let s1 = dom.find('#s1')[0]
let s2 = dom.find('#s2')[0]
let s3 = dom.find('#s3')[0]
console.log(dom.next(s1))
console.log(dom.siblings(s2))
console.log(dom.previous(s3))

let t = dom.find('#travel')[0]
dom.each(dom.children(t), (n) => dom.style(n, 'color', 'red'))

let t2 = dom.find('#t2')[0]
console.log(dom.index(t2))