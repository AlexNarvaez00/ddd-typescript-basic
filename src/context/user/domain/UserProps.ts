import { EmailValueObject } from '../../shared/domain/value-object/email/EmailValueObject'
import { StringValueObject } from '../../shared/domain/value-object/string/StringValueObject'
import { Uuid } from '../../shared/domain/value-object/uuid/Uuid'
import { UserDeletedAt } from './UserDeletedAt'
import { UserName } from './UserName'
import { UserPassword } from './UserPassword'

export interface UserProps {
    id: Uuid
    email: EmailValueObject
    username: UserName
    password: UserPassword
    deletedAt?: UserDeletedAt
    urlProfile?: StringValueObject
}
