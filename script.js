function showSection(sectionId, element){

  // section
  const sections = document.querySelectorAll('.section');

  sections.forEach(section => {
    section.classList.remove('active');
  });

  document.getElementById(sectionId)
  .classList.add('active');

  // menu active
  const buttons =
  document.querySelectorAll('.menu-btn');

  buttons.forEach(button => {
    button.classList.remove('active');
  });

  element.classList.add('active');

}