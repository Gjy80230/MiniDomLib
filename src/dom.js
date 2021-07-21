window.dom = {
    create(string) {
        const container = document.createElement("template");       
        container.innerHTML = string.trim()
        return container.content.firstChild
    },
    after(node, node2){ //在node后面增加node2
        node.parentNode.insertBefore(node2, node.nextSibling)
    },
    before(node, node2){
        node.parentNode.insertBefore(node2, node)
    },
    append(parent, node){
        parent.appendChild(node)
    },
    wrap(node, parent){
        dom.before(node, parent)
        dom.append(parent, node)
    },
    remove(node){
        node.parentNode.removeChild(node)
        return node
    },
    empty(node){
        const {childNodes} = node // childNodes = node.childNodes
        const array = [] //把引用还回去
        for(let i=0; i<childNodes.length; i++){
            dom.remove(childNodes[i])
            array.push(childNodes[i])
        }
        return array
    }
};
