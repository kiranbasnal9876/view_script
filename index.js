(function () {
  // Create container
  const container = document.createElement('div');
  container.id = 'custom-widget-container';
  container.style = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: white;
    border: 1px solid #ccc;
    padding: 16px;
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
    font-family: sans-serif;
    z-index: 9999;
  `;

  container.innerHTML = `
    <h3>My Custom Widget</h3>
    <p>This UI was loaded from an external script.</p>
    <button onclick="alert('Clicked!')">Click Me</button>
  `;

  document.body.appendChild(container);
})();
