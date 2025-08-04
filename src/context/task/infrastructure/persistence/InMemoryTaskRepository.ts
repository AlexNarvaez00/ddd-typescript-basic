import { Criteria } from '../../../shared/domain/criteria/Criteria'
import { Task } from '../../domain/Task'
import { TaskRepository } from '../../domain/TaskRepository'

export class InMemoryTaskRepository implements TaskRepository {
    private readonly tasks: Map<string, Task>

    constructor() {
        this.tasks = new Map()
    }

    public async match(criteria: Criteria): Promise<Task[]> {
        return Array.from(this.tasks.values())
    }

    public async save(task: Task): Promise<void> {
        this.tasks.set(task.id, task)
    }
}
