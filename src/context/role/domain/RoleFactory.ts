import { PermissionFactory } from '../../permission/domain/PermissionFactory'
import { PermissionNameEnum } from '../../permission/domain/PermissionNameEnum'
import { Role } from './Role'
import { RoleNameEnum } from './RoleNameEnum'

export class RoleFactory {
    private static roles = new Map<RoleNameEnum, Role>([
        [
            RoleNameEnum.ADMIN,
            Role.fromPrimitives({
                id: '8cb3a6cf-09fa-4e97-a00f-e2c2d10c1d25',
                name: RoleNameEnum.ADMIN,
                permissions: [
                    PermissionFactory.get(PermissionNameEnum.ALL_CREATE).id,
                    PermissionFactory.get(PermissionNameEnum.ALL_UPDATE).id,
                    PermissionFactory.get(PermissionNameEnum.ALL_DELETE).id,
                    PermissionFactory.get(PermissionNameEnum.ALL_VIEW).id,
                ],
            }),
        ],
        [
            RoleNameEnum.GUEST,
            Role.fromPrimitives({
                id: 'a900e020-2914-4b92-abde-50c34f9a40ef',
                name: RoleNameEnum.GUEST,
                permissions: [
                    PermissionFactory.get(PermissionNameEnum.ALL_VIEW).id,
                ],
            }),
        ],
    ])

    public static get(type: RoleNameEnum): Role {
        const role = this.roles.get(type)

        if (role === undefined) {
            throw new Error('Role not found')
        }

        return role
    }
}
