import { DomainError } from '../error/DomainError'
import { Query } from './Query'

export class QueryNotRegisterError extends DomainError {
  public type: string = 'type.domain.query.not-register.error'
  public message: string

  constructor(query: Query) {
    super()
    this.message = `The query <${query.constructor.name}> must be registed`
  }
}
