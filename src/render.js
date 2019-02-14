export default (Component, element) => {
  element.innerHTML = Component()
  if (Component.addEventListeners)
    Component.addEventListeners()
}