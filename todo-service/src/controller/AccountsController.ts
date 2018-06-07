import {TestAccount} from "../models/Accounts"
import {Get, Route} from "tsoa"
import {User} from "../models/user"
import {AccountService} from "../service/AccountService"

@Route("Accounts")
export class AccountsController {

    private accountService: AccountService = new AccountService()

    /** Get the current account */
    @Get("Current")
    public async current(): Promise<TestAccount> {
        return await this.accountService.searchAccounts()
    }

    /** Get a list of users for the account */
    @Get("Users")
    public async getUsers(): Promise<User[]> {
        return [
            {
                createdAt: new Date(),
                email: "test@test.com",
                id: 1
            },
            {
                createdAt: new Date(),
                email: "test2@test2.com",
                id: 2
            }
        ]
    }
}