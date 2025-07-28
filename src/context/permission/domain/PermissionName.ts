import { EnumValueObject } from '../../shared/domain/value-object/enum/EnumValueObject'
import { PermissionNameEnum } from './PermissionNameEnum'
import { PermissionNameError } from './PermissionNameError'

export class PermissionName extends EnumValueObject<string> {
    constructor(value: string) {
        super(value, Object.values(PermissionNameEnum))
    }

    public throwIfValueIsInValid(value: string): void {
        throw new PermissionNameError(value)
    }
}
