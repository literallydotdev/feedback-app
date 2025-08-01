// ***********************************************************
// This example support/component.js is processed and
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

/* global Cypress */

// Import commands.js using ES2015 syntax:
import './commands';

// Import global CSS to make CSS variables and global styles available in component tests
import '../../src/index.css';

import { mount } from 'cypress/react';

Cypress.Commands.add('mount', mount);

// Example use:
// cy.mount(<MyComponent />)
