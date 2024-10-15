// src/services/ReadService.ts
import { open } from 'sqlite';
import sqlite3 from 'sqlite3';
import { User } from '../models/User';

export class ReadService {
    async openDb() {
        return open({
            filename: './database.sqlite',
            driver: sqlite3.Database
        });
    }

    async getUsers(): Promise<User[]> {
        const db = await this.openDb();
        const users = await db.all('SELECT * FROM users');
        return users.map((user: any) => new User(user.id, user.name, user.email));
    }
}
