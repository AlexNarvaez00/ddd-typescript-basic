import { Request, Response } from 'express'
import { AuthenticationTokenHasherService } from '../../../../../context/authentication/domain/AuthenticationTokenHasherService'
import { UserRepository } from '../../../../../context/user/domain/UserRepository'
import { Controller } from '../../shared/controller/Controller'
import { Criteria } from '../../../../../context/shared/domain/criteria/Criteria'
import { Filters } from '../../../../../context/shared/domain/criteria/Filters'
import { Order } from '../../../../../context/shared/domain/criteria/Order'
import { UserMatch } from '../../../../../context/user/application/UserMatch'

interface AuthLogInControllerRequestBody {
    email: string
    password: string
}

interface AuthLogInControllerRequest extends Request {
    body: AuthLogInControllerRequestBody
}

interface AuthLogInControllerResponse extends Response {}

export class AuthLogInController
    implements
        Controller<AuthLogInControllerRequest, AuthLogInControllerResponse>
{
    constructor(
        private readonly hasherService: AuthenticationTokenHasherService,
        private readonly userRepository: UserRepository
    ) {}

    async run(
        request: AuthLogInControllerRequest,
        response: AuthLogInControllerResponse
    ): Promise<void> {
        const { email, password } = request.body
        const user = await this.findUserByEmail(email, this.userRepository)
        const tokenId = this.hasherService.hash(user)

        response.json({
            tokenId,
        })
    }

    private async findUserByEmail(
        email: string,
        userRepository: UserRepository
    ) {
        const criteria = new Criteria(
            Filters.fromValues([['email', '=', email]]),
            Order.none()
        )

        const userMatch = new UserMatch(userRepository)
        const [user] = await userMatch.run(criteria)

        if (user === undefined) {
            throw new Error('User not found')
        }

        return user
    }
}
