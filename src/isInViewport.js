/**
 * Return if an element is in viewport
 * 
 * @param {HTMLElement} element 
 * @returns Boolean
 */
export default function isInViewport(element) {
    let rect = element.getBoundingClientRect();
    let html = document.documentElement;
    return (
        (rect.top >= 0 && rect.top <= (window.innerHeight || html.clientHeight)) &&
        rect.left >= 0 &&
        rect.right <= (window.innerWidth || html.clientWidth)
    );
}