// import dependencies
import angular from 'angular'
import 'angular-ui-router';

// Import Controllers
import { PeepsController }      from './controllers/peepscontroller';
import { SinglePeepController } from './controllers/singlePeepController';
import { AddPeepsController }    from './controllers/addPeepsController';

// Import config file
import { config } from './config';

const url = 'https://secret-forest-21470.herokuapp.com/collections/thomas_ng_contact_app/';

// Start Angular / declare a module for myApp
angular
  // Setter for a module (register)
  .module('myApp', ['ui.router'])
  // Register config file
  .config(config)
  // App URL Constant
  .constant('URL', url)
  // Register Controllers
  .controller('PeepsController', PeepsController)
  .controller('SinglePeepController', SinglePeepController)
  .controller('AddPeepsController', AddPeepsController)
;
