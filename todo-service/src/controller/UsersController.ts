import {Body, Controller, Delete, Example, Get, Patch, Post, Route} from "tsoa"
import {User, UserCreateRequest, UserUpdateRequest} from "../models/user"

@Route("Users")
export class UsersController extends Controller {

    /** Get the current user */
    @Get("Current")
    @Example<User>({
        createdAt: new Date(),
        email: "test@test.com",
        id: 1
    })
    public async current(): Promise<User> {
        return {
            createdAt: new Date(),
            email: "test",
            id: 666
        }
    }

    /** Get user by ID */
    @Get("{userId}")
    public async get(userId: number): Promise<User> {
        return {
            createdAt: new Date(),
            email: "test2",
            id: userId
        }
    }

    /**
     * Create a user
     * @param request This is a user creation request description
     */
    @Post()
    public async create(@Body() request: UserCreateRequest): Promise<User> {
        return {
            createdAt: new Date(),
            email: request.email,
            id: 666
        }
    }

    /** Delete a user by ID */
    @Delete("{userId}")
    public async delete(userId: number): Promise<void> {
        return Promise.resolve()
    }

    /** Update a user */
    @Patch()
    public async update(@Body() request: UserUpdateRequest): Promise<User> {
        return {
            createdAt: request.createdAt,
            email: request.email,
            id: 1337
        }
    }
}