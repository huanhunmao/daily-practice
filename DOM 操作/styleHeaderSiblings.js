function styleHeaderSiblings() {
    if (!document.getElementsByTagName) return false
    var headers = document.getElementsByTagName('div')
    var elem
    for (var i = 0; i < headers[i].length; i++) {
        elem = getNextElement(headers[i].nextSibling)
        elem.style.fontSize = '40px'
        elem.style.color = "pink"
    }

    function getNextElement(node) {
        if (node.nodeType == 1) {
            return node
        }
        if (node.nextSibling) {
            return getNextElement(node.nextSibling)
        }
        return null
    }

    getNextElement(headers)

}