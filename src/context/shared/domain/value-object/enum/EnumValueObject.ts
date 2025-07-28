import { ValueObject } from '../ValueObject'

export abstract class EnumValueObject<T> extends ValueObject<T> {
    constructor(
        value: T,
        private readonly validValues: T[]
    ) {
        super(value)
        this.ensureValueIsValid(value)
    }

    private ensureValueIsValid(value: T) {
        const containValue = this.validValues.includes(value)

        if (containValue === false) {
            this.throwIfValueIsInValid(value)
        }
    }

    public abstract throwIfValueIsInValid(value: T): void
}
