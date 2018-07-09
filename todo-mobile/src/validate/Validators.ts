export abstract class Validator<T> {
    message: String
    valid: boolean

    constructor(message: String) {
        this.message = message
    }

    abstract validate(value: T): boolean

    public getMessage = () => {
        return this.message
    }

    public isValid = () => {
        return this.valid
    }

}

export class NotEmptyValidator extends Validator<String> {
    validate(value: String): boolean {
        return !!value
    }
}

export class EmailValidator extends Validator<String> {

    private regexp = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/

    validate(value: String): boolean {
        return this.regexp.test(value.toString())
    }
}

export class PasswordValidator extends Validator<String> {

    // At least one number, Uppercase, lowercase
    validate(value: String): boolean {
        const valueStr = value.toString()
        return /\d+/.test(valueStr) &&
            /[A-Z]/.test(valueStr) &&
            /[a-z]/.test(valueStr)
    }
}

export class ValidatorFactory {

    private validators: any[]

    constructor(validators: any[]) {
        this.validators = validators
    }

    append(validator: Validator<any>) {
        if (!this.validators) {
            this.validators = []
        }
        if (this.validators.indexOf(validator) === -1) {
            this.validators.push(validator)
        }
        return ValidatorFactory
    }

    invalid = () => {
        let invalid: boolean = false
        for (let validate of this.validators) {
            if (!validate.validate()) {
                return validate
            }
        }
        return invalid
    }

    getValidators = () => {
        return this.validators
    }

}