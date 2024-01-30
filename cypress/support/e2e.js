// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import './login_commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')

Cypress.on('uncaught:exception', (err, runnable) =>{
    if (err.message.includes('Minified React error #418')) {
        return false;
    }

    if (err.message.includes('Minified React error #329')) {
        return false
    }

    if (err.message.includes('Minified React error #423')) {
        return false
    }
})

Cypress.on('window:before:load', (win) => {
    win.fetch = null; // Isso pode ajudar a evitar logs de solicitações fetch no console
  });