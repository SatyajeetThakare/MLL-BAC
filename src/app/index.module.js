import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { LoginController } from './login/login.controller';
import { DashboardController } from './dashboard/dashboard.controller';
import { apiService } from '../app/components/api/api.service';
import { masterService } from '../app/components/master/master.service';
import { authService } from '../app/login/auth.service';
import { AppController } from '../app/components/app/app.controller';

angular.module('mllRfpClient', ['ui.router', 'ngFileUpload','toaster'])
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .controller('LoginController', LoginController)
  .controller('DashboardController', DashboardController)
  .service('apiService', apiService)
  .service('masterService', masterService)
  .service('authService', authService)
  .controller('AppController', AppController);
