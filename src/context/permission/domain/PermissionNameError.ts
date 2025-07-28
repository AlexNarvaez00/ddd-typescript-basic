import { DomainError } from '../../shared/domain/error/DomainError'

export class PermissionNameError extends DomainError {
    public type: string = 'type.domain.permission.name.error'
    public message: string

    constructor(message: string) {
        super()
        this.message = `Permission name is in valid ${message}`
    }
}
