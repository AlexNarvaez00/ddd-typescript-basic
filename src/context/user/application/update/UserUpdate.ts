import { StringValueObject } from '../../../shared/domain/value-object/string/StringValueObject'
import { User } from '../../domain/User'
import { UserRepository } from '../../domain/UserRepository'

export class UserUpdate {
    constructor(private readonly userRepository: UserRepository) {}

    async run(id: StringValueObject, user: User): Promise<void> {
        await this.userRepository.save(user)
    }
}
