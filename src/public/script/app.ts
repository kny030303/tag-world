document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app');

  console.log('hello from app.ts');
  // Example of dynamic content rendering
  const renderComponent = () => {
    const element = document.createElement('div');
    element.innerHTML =
      '<h1>Hello, this is a dynamically rendered component!</h1>';
    if (app) {
      app.appendChild(element);
    }
  };

  renderComponent();
});
