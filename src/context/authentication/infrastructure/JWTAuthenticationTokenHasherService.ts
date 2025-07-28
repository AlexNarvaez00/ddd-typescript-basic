import jwt from 'jsonwebtoken'
import { User } from '../../user/domain/User'
import { AuthenticationTokenHasherService } from '../domain/AuthenticationTokenHasherService'

export class JWTAuthenticationTokenHasherService
    implements AuthenticationTokenHasherService
{
    constructor(private readonly secret: string) {}

    public hash(user: User): string {
        return jwt.sign({ id: user.id }, this.secret)
    }

    public verify(token: string): string {
        return jwt.verify(token, this.secret) as string
    }
}
