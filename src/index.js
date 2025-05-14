import html from './index.html';
import './style.css';

(function () {
  const container = document.createElement('div');
  container.id = 'custom-widget-container';
  container.innerHTML = html;
  document.body.appendChild(container);

  document.getElementById('clickBtn').addEventListener('click', () => {
    alert('Clicked from HTML template!');
  });
})();
