import type { RouterContext } from '@/deps.ts'
import { Status } from '@/deps.ts'

import { log } from '@/middleware/logger.ts'
import BaseController from '@/mvc/common.abstract/BaseController.ts'
import AuthService from './AuthService.ts'



class AuthController extends BaseController {

  private authService: AuthService;

  constructor(authService: AuthService) {
    super(authService);   
    this.authService = authService;
  }
  


  protected async executeImpl({ request, response }: RouterContext): Promise<void> {
  }

  async login({ request, response }: RouterContext): Promise<void> {

    //const data = await this.authService.login();

    response.status = Status.ok;
    response.body = {
      success: true,
      data: {},
    };

  }

  async logout({ request, response }: RouterContext): Promise<void> {

    //const data = await this.authService.logout();

    response.status = Status.ok;
    response.body = {
      success: true,
      data: {},
    };
    
  }  

}



const authController = new AuthController(new AuthService());
export default authController