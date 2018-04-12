export const intersectionObserverSupport = "IntersectionObserver" in window;
export const isIntersecting = (element) => element.isIntersecting || element.intersectionRatio > 0;