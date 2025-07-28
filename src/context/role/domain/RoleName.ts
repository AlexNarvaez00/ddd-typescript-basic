import { EnumValueObject } from '../../shared/domain/value-object/enum/EnumValueObject'
import { RoleNameEnum } from './RoleNameEnum'
import { RoleNameError } from './RoleNameError'

export class RoleName extends EnumValueObject<string> {
    constructor(value: string) {
        super(value, Object.values(RoleNameEnum))
    }

    public throwIfValueIsInValid(value: string): void {
        throw new RoleNameError(value)
    }
}
