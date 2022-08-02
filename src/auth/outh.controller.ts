import { Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Controller('auth')
export class AuthController{
    constructor(private authService:AuthService){
        // this.authService.test()
    }

    @Post('signUp')
    signUp(){
        return 'im in signUp';
    }

    @Post('signIn')
    signIn(){
        return 'im in signIn';
    }
}