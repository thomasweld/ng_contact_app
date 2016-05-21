// import dependencies
import angular from 'angular'
import 'angular-ui-router';

// Import Controllers
import { PeepsController }   from './controllers/peepscontroller';
import { SinglePeepController } from './controllers/singlePeepController';
import { AddPeepController } from './controllers/addPeepController';

// Import config file
// import { config } from './config';

// Start Angular / declare a module for myApp
angular
  // Setter for a module (register)
  .module('myApp', ['ui.router'])
  // Register Our Configuration
  // .config(config)
  // // App URL Constant
  // .constant('URL', url)
  // // Register Our Controllers
  // .controller('ListController', ListController)
  // .controller('SingleController', SingleController)
  // .controller('AddController', AddController)
;
