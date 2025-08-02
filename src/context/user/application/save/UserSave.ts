import { User } from '../../domain/User'
import { UserPasswordEncryption } from '../../domain/UserPasswordEncryption'
import { UserPrimitives } from '../../domain/UserPrimitives'
import { UserRepository } from '../../domain/UserRepository'

export class UserSave {
    constructor(
        private readonly userRepository: UserRepository,
        private readonly userPasswordEncryption: UserPasswordEncryption
    ) {}

    async run(userPrimitives: UserPrimitives): Promise<void> {
        const { password: rawPassword, ...props } = userPrimitives
        const passwordHashed =
            await this.userPasswordEncryption.hash(rawPassword)
        const user = User.fromPrimitives({ ...props, password: passwordHashed })
        await this.userRepository.save(user)
    }
}
