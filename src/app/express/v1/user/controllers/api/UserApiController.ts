import { Request, Response } from 'express'
import { Criteria } from '../../../../../../context/shared/domain/criteria/Criteria'
import { Filters } from '../../../../../../context/shared/domain/criteria/Filters'
import { Order } from '../../../../../../context/shared/domain/criteria/Order'
import { UserDestroy } from '../../../../../../context/user/application/destroy/UserDestroy'
import { UserMatch } from '../../../../../../context/user/application/match/UserMatch'
import { UserSave } from '../../../../../../context/user/application/save/UserSave'
import { UserPasswordEncryption } from '../../../../../../context/user/domain/UserPasswordEncryption'
import { UserRepository } from '../../../../../../context/user/domain/UserRepository'
import { ApiController } from '../../../shared/controller/ApiController'

export class UserController implements ApiController {
    private readonly userRepository: UserRepository
    private readonly userPasswordEncryption: UserPasswordEncryption

    constructor(params: {
        userRepository: UserRepository
        userPasswordEncryption: UserPasswordEncryption
    }) {
        this.userRepository = params.userRepository
        this.userPasswordEncryption = params.userPasswordEncryption
    }

    public async index(request: Request, response: Response): Promise<void> {
        const userMatcher = new UserMatch(this.userRepository)
        const criteria = new Criteria(Filters.none(), Order.none())
        const users = await userMatcher.run(criteria)
        const primitives = users.map((user) => {
            const { username } = user.toPrimitives()
            return {
                username,
            }
        })

        response.json(primitives)
    }

    public async save(request: Request, response: Response): Promise<void> {
        const userSaver = new UserSave(
            this.userRepository,
            this.userPasswordEncryption
        )
        await userSaver.run(request.body)
    }

    public async update(request: Request, response: Response): Promise<void> {
        throw new Error('Method not implemented.')
    }

    public async destroy(request: Request, response: Response): Promise<void> {
        const userDestroyer = new UserDestroy(this.userRepository)
        await userDestroyer.run(request.params.userId)
        response.sendStatus(203)
    }
}
