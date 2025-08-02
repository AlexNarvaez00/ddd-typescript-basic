import { UserPasswordEncryption } from '../../domain/UserPasswordEncryption'
import bcrypt from 'bcrypt'

export class BcryptUserPasswordEncryption implements UserPasswordEncryption {
    public async hash(password: string): Promise<string> {
        return bcrypt.hash(password, 12)
    }

    public async compare(password: string, hash: string): Promise<boolean> {
        return bcrypt.compare(password, hash)
    }
}
