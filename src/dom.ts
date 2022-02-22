// export function evNumVal(fn: (val: number) => void) {
//     return evStrVal((val) => fn(Number(val)));
// }

// export function evStrVal(fn: (val: string) => void) {
//     return ({ target }: Event) => {
//         fn((target as HTMLInputElement).value);
//     };
// }

export function evEach(
    elements: HTMLCollectionOf<Element>,
    type: string,
    listener: EventListenerOrEventListenerObject,
) {
    Array.from(elements).forEach((el) => el.addEventListener(type, listener));
}

// export function applyToChild(
//     parent: HTMLElement,
//     fn: (el: HTMLElement, index?: number) => void,
// ) {
//     return parent.childNodes.forEach((el, index) =>
//         fn(el as HTMLElement, index),
//     );
// }

// export function toggleChildClass(parent: HTMLElement, classname: string) {
//     return applyToChild(parent, (el) => el.classList.toggle(classname));
// }

// export function addChildClass(parent: HTMLElement, classname: string) {
//     return applyToChild(parent, (el) => el.classList.add(classname));
// }

// export function removeChildClass(parent: HTMLElement, classname: string) {
//     return applyToChild(parent, (el) => el.classList.remove(classname));
// }

// export function toggleSiblingClass(el: HTMLElement, classname: string) {
//     if (el.classList.contains(classname)) {
//         addChildClass(el.parentElement, classname);
//         el.classList.remove(classname);
//     } else {
//         removeChildClass(el.parentElement, classname);
//         el.classList.add(classname);
//     }
// }

// export function setClass(el: HTMLElement, classname: string, value: boolean) {
//     if (value) {
//         el.classList.add(classname);
//     } else {
//         el.classList.remove(classname);
//     }
// }

// export function toggleAttr(
//     el: HTMLElement,
//     name: string,
//     val1: string,
//     val2: string,
// ) {
//     if (el.getAttribute(name) === val1) {
//         el.setAttribute(name, val2);
//     } else {
//         el.setAttribute(name, val1);
//     }
// }

export function forEachEl(
    elements: HTMLCollectionOf<Element>,
    fn: (el: HTMLElement, index?: number) => void,
) {
    // this could be forEachEl
    Array.from(elements).forEach((el, index) => fn(el as HTMLElement, index));
}

export function forEachClass(
    classname: string,
    fn: (el: HTMLElement, index?: number) => void,
) {
    forEachEl(elByClass(classname), fn);
}

export function inputById(id: string) {
    return elById(id) as HTMLInputElement;
}

export function elById(id: string) {
    return document.getElementById(id);
}

export function elByClass(classname: string) {
    return document.getElementsByClassName(classname);
}

// export function elFromHtml(html: string) {
//     var template = document.createElement('template');
//     template.innerHTML = html.trim();
//     return template.content.firstChild as HTMLElement;
// }

// export function join(classnames: string[]) {
//     return classnames.filter((f) => f).join(' ');
// }
