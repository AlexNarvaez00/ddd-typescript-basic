import { Criteria } from '../../../../shared/domain/criteria/Criteria'
import { Filters } from '../../../../shared/domain/criteria/Filters'
import { Operators } from '../../../../shared/domain/criteria/Operators'
import { Order } from '../../../../shared/domain/criteria/Order'
import { EmailValueObject } from '../../../../shared/domain/value-object/email/EmailValueObject'
import { User } from '../../../domain/User'
import { UserAuthenticationTokenHasher } from '../../../domain/UserAuthenticationTokenHasher'
import { UserPasswordEncryption } from '../../../domain/UserPasswordEncryption'
import { UserRepository } from '../../../domain/UserRepository'

export class UserAuthenticationSingIn {
    constructor(
        private readonly userRepository: UserRepository,
        private readonly userPasswordEncryption: UserPasswordEncryption,
        private readonly userAuthenticationTokenHasher: UserAuthenticationTokenHasher
    ) {}

    public async run(email: string, password: string) {
        this.ensureEmailIsValid(email)
        const user = await this.findUserByEmail(email)
        const { password: passwordHashed } = user.toPrimitives()
        const isEquals = await this.userPasswordEncryption.compare(
            password,
            passwordHashed
        )

        if (isEquals === false) {
            throw new Error('Credential is not valid')
        }

        return this.userAuthenticationTokenHasher.hash(user)
    }

    private ensureEmailIsValid(email: string) {
        new EmailValueObject(email)
    }

    private async findUserByEmail(email: string): Promise<User> {
        const criteria = new Criteria(
            Filters.fromValues([['email', Operators.EQ, email]]),
            Order.none()
        )
        const [user] = await this.userRepository.match(criteria)

        if (user === undefined) {
            throw new Error('User not found')
        }

        return user
    }
}
