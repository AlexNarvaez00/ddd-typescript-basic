import { ToPrimitives } from './ToPrimitives'
import { Uuid } from './value-object/uuid/Uuid'

export abstract class Entity<Props> {
    protected readonly _id: Uuid

    constructor(
        protected readonly props: Props,
        id?: Uuid
    ) {
        this._id = id ?? Uuid.random()
    }

    abstract toPrimitives(): ToPrimitives<Props>
}
