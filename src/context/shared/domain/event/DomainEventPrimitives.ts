import { DomainEventParams } from './DomainEvent'
import { DomainEventAttributes } from './DomainEventAttributes'

export interface DomainEventPrimitives extends DomainEventParams {
  eventId: string
  occurredOn: Date
  attributes: DomainEventAttributes
}
