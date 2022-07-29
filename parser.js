window.addEventListener('DOMContentLoaded', () => {
    const body = document.querySelector('body');
    let textNodes = [];

    function recursy(elem) {
        elem.body.childNodes.forEach(node => {
            if (node.nodeName.match(/^H\d/)) {
                const obj = {
                    header: nodeName,
                    content: node.textContent.trim()
                };
                textNodes.push(obj);
            } else {
                recursy(node)

            }
        })

    }
    recursy(body);

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            "Content-Type": 'application/json',
        },
        body: JSON.stringify(textNodes)
    })
        .then(resp => resp.json())
        .then(json => console.log(json));
});