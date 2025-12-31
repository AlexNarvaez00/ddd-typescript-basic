import { DomainEvent } from './DomainEvent'
import { DomainEventClass } from './DomainEventClass'

export interface DomainEventSubscriber<T extends DomainEvent> {
  on(event: T): Promise<void>
  suscribeTo(): DomainEventClass[]
}
