import { Request, Response } from 'express'
import { EmailValueObject } from '../../../../../../context/shared/domain/value-object/email/EmailValueObject'
import { StringValueObject } from '../../../../../../context/shared/domain/value-object/string/StringValueObject'
import { UserAuthenticationSingIn } from '../../../../../../context/user/application/authentication/sing-in/UserAuthenticationSingIn'
import { UserAuthenticationTokenHasher } from '../../../../../../context/user/domain/UserAuthenticationTokenHasher'
import { UserPasswordEncryption } from '../../../../../../context/user/domain/UserPasswordEncryption'
import { UserRepository } from '../../../../../../context/user/domain/UserRepository'

export class UserSingController {
    constructor(
        private readonly userRepository: UserRepository,
        private readonly userPasswordEncryption: UserPasswordEncryption,
        private readonly userAuthenticationTokenHasher: UserAuthenticationTokenHasher
    ) {}

    public async singIn(request: Request, response: Response) {
        const userAuthenticationSingIn = new UserAuthenticationSingIn(
            this.userRepository,
            this.userPasswordEncryption,
            this.userAuthenticationTokenHasher
        )
        const tokenId = await userAuthenticationSingIn.run(
            new EmailValueObject(request.body.email).value,
            new StringValueObject(request.body.password).value
        )

        response.json({ tokenId })
    }
}
