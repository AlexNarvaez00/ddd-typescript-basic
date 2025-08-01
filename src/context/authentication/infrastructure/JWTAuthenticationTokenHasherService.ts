import jwt, { Algorithm } from 'jsonwebtoken'
import { User } from '../../user/domain/User'
import { AuthenticationTokenHasherService } from '../domain/AuthenticationTokenHasherService'

export class JWTAuthenticationTokenHasherService
    implements AuthenticationTokenHasherService
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
