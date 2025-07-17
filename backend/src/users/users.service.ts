export class UsersService {
    private users: { id: number; name: string }[] = [
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'Jane Smith' }
    ];

    public getUsers(): { id: number; name: string }[] {
        return this.users;
    }
}