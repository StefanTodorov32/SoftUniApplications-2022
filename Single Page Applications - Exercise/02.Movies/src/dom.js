const main = document.querySelector('main')

export function showView(section){
    main.replaceChildren(section)
}

export function e(type, attributes, ...content) {
    const result = document.createElement(type)
    for (const prop in attributes) {
        result[prop] = attributes[prop];
    }
    
    content = content.reduce((a, c) => a.concat(Array.isArray(c) ? c : [c]), []);
    content.forEach(entry => {
        if (typeof entry == 'string' || typeof entry == 'number') {
            const node = document.createTextNode(entry);
            result.appendChild(node);
        } else {
            result.appendChild(entry);
        }
    });

    return result;
}