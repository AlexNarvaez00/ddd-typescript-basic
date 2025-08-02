import { Criteria } from '../../../shared/domain/criteria/Criteria'
import { Filters } from '../../../shared/domain/criteria/Filters'
import { Operators } from '../../../shared/domain/criteria/Operators'
import { Order } from '../../../shared/domain/criteria/Order'
import { Uuid } from '../../../shared/domain/value-object/uuid/Uuid'
import { User } from '../../domain/User'
import { UserDeletedAt } from '../../domain/UserDeletedAt'
import { UserRepository } from '../../domain/UserRepository'

export class UserDestroy {
    constructor(private readonly userRepository: UserRepository) {}

    public async run(userId: string) {
        this.ensureIdIsValid(userId)
        const user = await this.findUserById(userId)
        user.updateDeletedAt(new UserDeletedAt(new Date()))
        await this.userRepository.save(user)
    }

    private async findUserById(userId: string): Promise<User> {
        const criteria = new Criteria(
            Filters.fromValues([['_id', Operators.EQ, userId]]),
            Order.none()
        )
        const [user] = await this.userRepository.match(criteria)

        if (user === undefined) {
            throw new Error('User not found')
        }

        return user
    }

    private ensureIdIsValid(userId: string) {
        new Uuid(userId)
    }
}
