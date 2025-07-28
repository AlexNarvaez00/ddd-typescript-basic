import { DomainError } from '../../shared/domain/error/DomainError'

export class RoleNameError extends DomainError {
    public type: string = 'type.domain.role.name.error'
    public message: string

    constructor(value: string) {
        super()
        this.message = `Role name is invalid ${value}`
    }
}
