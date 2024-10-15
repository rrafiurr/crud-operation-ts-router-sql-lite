// src/services/InsertService.ts
import { open } from 'sqlite';
import sqlite3 from 'sqlite3';
import { User } from '../models/User';

export class InsertService {
    async openDb() {
        return open({
            filename: './database.sqlite',
            driver: sqlite3.Database
        });
    }

    async insertUser(user: User) {
        const db = await this.openDb();
        await db.run('INSERT INTO users (name, email) VALUES (?, ?)', [user.name, user.email]);
        console.log('User inserted');
    }
}
