import express, { Request, Response } from 'express';

import { InsertService } from '../services/InsertService';
import { ReadService } from '../services/ReadService';
import { UpdateService } from '../services/UpdateService';
import { User } from '../models/User';


const router = express.Router();

const insertService = new InsertService();
const updateService = new UpdateService();
const readService = new ReadService();

router.post('/users', async (req: Request, res: Response) => {
    const { name, email } = req.body;
    const newUser = new User(null, name, email);
    await insertService.insertUser(newUser);
    res.status(201).json({ message: 'User created' });
});


router.get('/users', async (req: Request, res: Response) => {
    const users = await readService.getUsers();
    res.json(users);
});


export default router;
