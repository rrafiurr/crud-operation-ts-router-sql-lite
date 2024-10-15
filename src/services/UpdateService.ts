// src/services/ReadService.ts
import { open } from 'sqlite';
import sqlite3 from 'sqlite3';
import { User } from '../models/User';

export class UpdateService {
    async openDb() {
        return open({
            filename: './database.sqlite',
            driver: sqlite3.Database
        });
    }

    async updateUser(user: User) {
        const db = await this.openDb();
        await db.run('UPDATE users SET name = ?, email = ? WHERE id = ?', [user.name, user.email, user.id]);
        console.log('User updated');
    }
}