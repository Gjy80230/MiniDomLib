const div = dom.create("<div>newDiv</div>");
const div1 = dom.create("<div>div1</div>");
const div2 = dom.create("<div>div2</div>");
console.log(div1)

dom.after(test, div1)
dom.wrap(testPlus, div2)
dom.remove(div1)
console.log(dom.empty(test))