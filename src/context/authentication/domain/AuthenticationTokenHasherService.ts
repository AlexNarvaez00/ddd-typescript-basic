import { User } from '../../user/domain/User'

export interface AuthenticationTokenHasherService {
    hash(user: User): string
    verify(token: string): string
}
