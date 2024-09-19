import './css/style.css'

// Aside
import aside from './components/aside'
import main from './components/main'

// Handlers
import buttonHandlers from './handlers/buttonHandlers'
import inboxHandlers from './handlers/inboxHandlers'
import storageHandlers from './services/storageHandlers'

(() => {
  const appendContent = () => {
    const body = document.querySelector("body");
        
    body.appendChild(aside());
    body.appendChild(main);
    buttonHandlers();
    inboxHandlers();
  }

  storageHandlers();
  appendContent();
})()