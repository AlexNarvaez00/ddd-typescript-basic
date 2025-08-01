export interface UserPasswordEncrypted {
    hash(password: string): Promise<string>
    compare(password: string, hash: string): Promise<boolean>
}
