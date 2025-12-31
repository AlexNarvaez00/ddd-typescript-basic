import { Uuid } from '../value-object/uuid/Uuid'
import { DomainEventAttributes } from './DomainEventAttributes'
import { DomainEventPrimitives } from './DomainEventPrimitives'

export interface DomainEventParams {
  eventId?: string
  eventName: string
  occurredOn?: Date
  aggregateId: string
}

export abstract class DomainEvent {
  static EVENT_NAME: string
  static fromPrimitives: (params: DomainEventPrimitives) => DomainEvent

  readonly eventId: string
  readonly eventName: string
  readonly occurredOn: Date
  readonly aggregateId: string

  public constructor(params: DomainEventParams) {
    const { eventId, occurredOn } = params
    this.eventId = eventId ?? Uuid.random().value
    this.occurredOn = occurredOn ?? new Date()
      ; ({ eventName: this.eventName, aggregateId: this.aggregateId } = params)
  }

  abstract toPrimitives(): DomainEventAttributes
}
