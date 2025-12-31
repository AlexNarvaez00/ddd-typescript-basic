import { DomainError } from '../error/DomainError'
import { Command } from './Command'

export class CommandNotRegisterError extends DomainError {
  public type: string = 'type.domain.command.not-register.error'
  public message: string

  constructor(command: Command) {
    super()
    this.message = `The command <${command.constructor.name}> must be registed`
  }
}
