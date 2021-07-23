const div = dom.create("<div>newDiv</div>");
const div1 = dom.create("<div>div1</div>");
const div2 = dom.create("<div>div2</div>");
console.log(div1)

dom.after(test, div1)
dom.wrap(window.testPlus, div2)
dom.remove(div1)

console.log(dom.empty(empty))

dom.attr(test, 'title', 'I am Gene')
let title = dom.attr(test, 'title')
console.log(`title: ${title}`)
