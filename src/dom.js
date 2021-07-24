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
    },
    text(node, string){ //适配
        if(arguments.length === 2){        
            if('innerText' in node){
                node.innerText = string //ie
            }else{
                node.textContent = string   //firefox
            }
        }else if(arguments.length === 1){
            if('innerText' in node){
                return node.innerText = string 
            }else{
                return node.textContent = string   
            }
        }
    },
    html(node, string){
        if(arguments.length === 2){
            node.innerHTML = string
        }else if(arguments.length === 1){
            return node.innerHTML
        }
        
    },
    style(node, name, value){
        if(arguments.length === 3){
            node.style[name] = value
        }else if(arguments.length === 2){
            if(typeof name === 'string'){
                return node.style[name]
            }else if(name instanceof Object){
                for(let key in name){
                    node.style[key] =  name[key]
                 }
            } 
        }
    }
};
