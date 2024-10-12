document.querySelectorAll(".faqs__item").forEach((item) => {
  item.addEventListener("click", () => {
    item.parentNode.classList.toggle("faqs__item-text--active");
  });
});
