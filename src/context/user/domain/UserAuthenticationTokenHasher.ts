import { User } from './User'

export interface UserAuthenticationTokenHasher {
    hash(user: User): string
    verify(token: string): string
}
