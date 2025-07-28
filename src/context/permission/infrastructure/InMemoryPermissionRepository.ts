import { Criteria } from '../../shared/domain/criteria/Criteria'
import { Permission } from '../domain/Permission'
import { PermissionFactory } from '../domain/PermissionFactory'
import { PermissionNameEnum } from '../domain/PermissionNameEnum'
import { PermissionRepository } from '../domain/PermissionRepository'

export class InMemoryPermissionRepository implements PermissionRepository {
    private readonly permissions = new Map<PermissionNameEnum, Permission>([
        [
            PermissionNameEnum.ALL_CREATE,
            PermissionFactory.get(PermissionNameEnum.ALL_CREATE),
        ],
        [
            PermissionNameEnum.ALL_UPDATE,
            PermissionFactory.get(PermissionNameEnum.ALL_UPDATE),
        ],
        [
            PermissionNameEnum.ALL_DELETE,
            PermissionFactory.get(PermissionNameEnum.ALL_DELETE),
        ],
        [
            PermissionNameEnum.ALL_VIEW,
            PermissionFactory.get(PermissionNameEnum.ALL_VIEW),
        ],
    ])

    save(permission: Permission): Promise<void> {
        throw new Error('Method not implemented.')
    }

    public async match(_criteria: Criteria): Promise<Permission[]> {
        return Array.from(this.permissions.values())
    }
}
