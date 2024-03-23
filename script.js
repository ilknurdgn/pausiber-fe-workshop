const projectsContainer = document.querySelector('.projects-container');

const typed = new Typed('.input', {
  strings: ['Adam Keyes.', 'Web Developer.'],
  typeSpeed: 70,
  backSpeed: 60,
  loop: true,
});

projectsData.forEach((project) => {
  const projectDiv = document.createElement('div');
  projectDiv.classList.add('project');
  projectsContainer.appendChild(projectDiv);

  const projectTitle = document.createElement('span');
  projectTitle.innerText = project.title;
  projectTitle.classList.add('projectTitle');
  projectDiv.appendChild(projectTitle);

  const projectLink = document.createElement('a');
  projectLink.href = project.appLink;
  projectLink.target = '_blank';
  projectDiv.appendChild(projectLink);

  const projectImage = document.createElement('img');
  projectImage.src = project.images;
  projectLink.appendChild(projectImage);
});
