import { Criteria } from '../../../shared/domain/criteria/Criteria'
import { User } from '../../domain/User'
import { UserRepository } from '../../domain/UserRepository'

export class UserMatch {
    constructor(private readonly userRepository: UserRepository) {}

    async run(criteria: Criteria): Promise<User[]> {
        return await this.userRepository.match(criteria)
    }
}
