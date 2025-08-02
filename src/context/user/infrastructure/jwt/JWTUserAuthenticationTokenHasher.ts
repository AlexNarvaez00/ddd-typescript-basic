import jwt, { Algorithm } from 'jsonwebtoken'
import { User } from '../../domain/User'
import { UserAuthenticationTokenHasher } from '../../domain/UserAuthenticationTokenHasher'

export class JWTAuthenticationTokenHasherService
    implements UserAuthenticationTokenHasher
{
    constructor(
        private readonly secret: string,
        private readonly algorithm: Algorithm
    ) {}

    public hash(user: User): string {
        return jwt.sign({ id: user.id, email: user.email }, this.secret, {
            algorithm: this.algorithm,
            expiresIn: '1h',
        })
    }

    public verify(token: string): string {
        return jwt.verify(token, this.secret) as string
    }
}
