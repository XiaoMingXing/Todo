import {Get, Route} from "tsoa"
import {AccountService} from "../service/AccountService"

@Route("Auth")
export class AuthController {

    /** Get the current account */
    @Get("simple")
    public simpleAuth(): string {
        return "success"
    }
}