import { Criteria } from '../../../shared/domain/criteria/Criteria'
import { User } from '../../domain/User'
import { UserRepository } from '../../domain/UserRepository'

export class InMemoryUserRepository implements UserRepository {
    private storage = new Map<string, User>()

    public async save(user: User): Promise<void> {
        this.storage.set(user.id, user)
    }

    public async match(criteria: Criteria): Promise<User[]> {
        return Array.from(this.storage.values())
    }
}
