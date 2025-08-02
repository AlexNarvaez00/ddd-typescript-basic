import { Entity } from '../../shared/domain/Entity'
import { EmailValueObject } from '../../shared/domain/value-object/email/EmailValueObject'
import { StringValueObject } from '../../shared/domain/value-object/string/StringValueObject'
import { Uuid } from '../../shared/domain/value-object/uuid/Uuid'
import { UserDeletedAt } from './UserDeletedAt'
import { UserName } from './UserName'
import { UserPassword } from './UserPassword'
import { UserPrimitives } from './UserPrimitives'
import { UserProps } from './UserProps'

export class User extends Entity<UserProps> {
    private constructor(props: UserProps) {
        super(props, props.id)
    }

    public get id(): string {
        return this._id.value
    }

    public get email(): string {
        return this.props.email.value
    }

    public get username(): string {
        return this.props.username.value
    }

    public get password(): string {
        return this.props.password.value
    }

    public get urlProfile(): string | undefined {
        return this.props.urlProfile?.value
    }

    public updateDeletedAt(date: UserDeletedAt) {
        this.props.deletedAt = date
    }

    public updatePassword(password: UserPassword) {
        this.props.password = password
    }

    public updateUrlProfile(urlProfile: StringValueObject) {
        this.props.urlProfile = urlProfile
    }

    public static fromPrimitives({
        id,
        email,
        username,
        password,
        urlProfile,
    }: UserPrimitives): User {
        return new User({
            id: id ? new Uuid(id) : Uuid.random(),
            email: new EmailValueObject(email),
            password: new StringValueObject(password),
            urlProfile: urlProfile
                ? new StringValueObject(urlProfile)
                : undefined,
            username: new UserName(username),
        })
    }

    public toPrimitives(): UserPrimitives {
        return {
            id: this.id,
            email: this.email,
            username: this.username,
            password: this.password,
            urlProfile: this.urlProfile,
        }
    }
}
