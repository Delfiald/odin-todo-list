import './css/style.css'

// Aside
import aside from './components/aside'
import main from './components/main'

// Handlers
import buttonHandlers from './handlers/buttonHandlers'
import inboxHandlers from './handlers/inboxHandlers'

// Test
import test from './logic/test'

(() => {
  const appendContent = () => {
    const body = document.querySelector("body");

    body.appendChild(aside);
    body.appendChild(main);

    buttonHandlers();
    inboxHandlers();
  }

  window.onload = () => {
    appendContent();
    test();
  }
})()