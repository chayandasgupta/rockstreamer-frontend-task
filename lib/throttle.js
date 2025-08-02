export function throttle(func, wait) {
  let lastCallTime = 0;
  let timeoutId = null;

  return function throttled(...args) {
    const now = Date.now();
    const remaining = wait - (now - lastCallTime);

    if (remaining <= 0) {
      if (timeoutId) {
        clearTimeout(timeoutId);
        timeoutId = null;
      }
      lastCallTime = now;
      func.apply(this, args);
    } else if (!timeoutId) {
      timeoutId = setTimeout(() => {
        lastCallTime = Date.now();
        timeoutId = null;
        func.apply(this, args);
      }, remaining);
    }
  };
}
