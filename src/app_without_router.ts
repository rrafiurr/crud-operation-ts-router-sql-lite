import { InsertService } from "./services/InsertService";
import { ReadService } from "./services/ReadService";
import { UpdateService } from "./services/UpdateService";
import { User } from "./models/User";

async function main() {
    const insertService = new InsertService();
    const readService = new ReadService();
    const updateService = new UpdateService();

    await insertService.openDb().then(async (db) => {
        await db.exec('CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, name TEXT, email TEXT)');
        console.log('Table created or exists');
    });
    
    const user1 = new User(null, 'Rafiur', 'john@example.com');
    const user2 = new User(null, 'Jane Doe', 'jane@example.com');
    await insertService.insertUser(user1);
    await insertService.insertUser(user2);


    const userList = await readService.getUsers();

    console.table(userList);


    const updatedUser = new User(1, 'John Updated', 'john_updated@example.com');
    await updateService.updateUser(updatedUser);


    const updateList = await readService.getUsers();
    console.table(updateList);
    
}


main().catch(console.error);
