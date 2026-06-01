export const scrollToElement = (elementId: string, offset: number = 100) => {
  const element = document.getElementById(elementId);

  if (!element) return;

  const position = element.getBoundingClientRect().top;
  const scrollPosition = position + window.pageYOffset - offset;

  window.scrollTo({
    top: scrollPosition,
    behavior: "smooth",
  });
};
