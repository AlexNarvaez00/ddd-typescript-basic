import { Permission } from './Permission'
import { PermissionNameEnum } from './PermissionNameEnum'

export class PermissionFactory {
    private static permissions = new Map<PermissionNameEnum, Permission>([
        [
            PermissionNameEnum.ALL_CREATE,
            Permission.fromPrimitives({
                id: '91723f04-78ee-4689-93c5-54a7e881344c',
                name: PermissionNameEnum.ALL_CREATE,
            }),
        ],
        [
            PermissionNameEnum.ALL_UPDATE,
            Permission.fromPrimitives({
                id: '882986cf-777b-4220-9799-a02f3f317e36',
                name: PermissionNameEnum.ALL_UPDATE,
            }),
        ],
        [
            PermissionNameEnum.ALL_VIEW,
            Permission.fromPrimitives({
                id: '178fda72-6364-4037-a3ea-da1d009c76f3',
                name: PermissionNameEnum.ALL_VIEW,
            }),
        ],
        [
            PermissionNameEnum.ALL_DELETE,
            Permission.fromPrimitives({
                id: '943a76dc-9188-4b2a-9c06-94bed53170dc',
                name: PermissionNameEnum.ALL_DELETE,
            }),
        ],
    ])

    public static get(type: PermissionNameEnum): Permission {
        const permission = PermissionFactory.permissions.get(type)

        if (permission === undefined) {
            throw new Error('Permission not found')
        }

        return permission
    }
}
