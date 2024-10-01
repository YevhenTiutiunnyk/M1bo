



const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;
const article = document.querySelector('article');
const menuLinks = document.querySelectorAll('.menu a');


darkModeToggle.addEventListener('click', function() {
  
  article.classList.toggle('dark-mode');
  body.classList.toggle('dark-mode');

 
  menuLinks.forEach(link => {
    link.classList.toggle('dark-mode');
  });
  

  darkModeToggle.classList.toggle('dark-mode');
  

  if (article.classList.contains('dark-mode')) {
    darkModeToggle.textContent = 'Switch to Light Mode';
  } else {
    darkModeToggle.textContent = 'Switch to Dark Mode';
  }

  if (body.classList.contains('dark-mode')) {
    darkModeToggle.textContent = 'Switch to Light Mode';
  } else {
    darkModeToggle.textContent = 'Switch to Dark Mode';
  }
});



