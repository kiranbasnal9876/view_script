import "./index.css";



(function() {
    const container = document.createElement('div');
    container.id = 'custom-widget-container';
    container.innerHTML = (0, {});
    document.body.appendChild(container);
    document.getElementById('clickBtn').addEventListener('click', ()=>{
        alert('Clicked from HTML template!');
    });
})();


