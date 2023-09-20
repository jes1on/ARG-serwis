import { useEffect } from "react";

const useIntersectionObserver = (targetClassName, showClassName) => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(showClassName);
        } else {
          entry.target.classList.remove(showClassName);
        }
      });
    });

    const hiddenElements = document.querySelectorAll(`.${targetClassName}`);
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, [targetClassName, showClassName]);
}

export default useIntersectionObserver;