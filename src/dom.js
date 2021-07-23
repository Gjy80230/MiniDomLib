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
        let x = node.firstChild
        let array = []
        while(x){
            array.push(dom.remove(node.firstChild))
            x = node.firstChild
        }
        return array
    },
    attr(node, name, value){
        if(arguments.length === 3){
            node.setAttribute(name, value)
        }else if(arguments.length === 2){
            return node.getAttribute(name)
        }
    }
};
