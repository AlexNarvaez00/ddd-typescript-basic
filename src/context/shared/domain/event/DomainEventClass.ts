import { DomainEvent } from './DomainEvent'
import { DomainEventPrimitives } from './DomainEventPrimitives'

/**
 * When Domain Event already was implement
 */
export type DomainEventClass = {
  EVENT_NAME: string
  fromPrimitives: (params: DomainEventPrimitives) => DomainEvent
}
