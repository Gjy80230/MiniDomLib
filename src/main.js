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

dom.text(test, '这是个文本')

dom.style(test, {background: 'blue', color: 'red'})
console.log(dom.style(test, 'color'))
dom.style(test, 'border', '1px solid black')

dom.class.add(test, 'red')
dom.class.add(test, 'blue')

dom.class.remove(test, 'blue')
console.log(dom.class.has(test, 'blue'))

let fn = ()=>{
    console.log('点击了')
}
dom.on(test, 'click', fn)

dom.off(test, 'click', fn)