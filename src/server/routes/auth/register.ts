import * as express from 'express';
import * as jwt from 'jsonwebtoken';
import { ReqUsers } from '../../../../types';
import { jwtConfig } from '../../config';
import { generateHash } from '../../utils/passwords';
import db_users from '../../db/queries/users';

const router = express.Router();

router.post('/', async (req: ReqUsers, res) => {
    const { email, password, name } = req.body;
    try {
        if(!email || !password){
            res.json('Fill out all fields!');
            return;
        }
        const hashed = generateHash(password);
        const newUser = { email, password: hashed, name, role: 'guest' };
        const register = await db_users.insert(newUser);

        const token = jwt.sign({ userid: req.user.id, email: req.user.email, role: 'guest'},
        jwtConfig.secret,
        {expiresIn: jwtConfig.expires});

        res.json({token, register});
    } catch (error) {
        res.status(500).json({ message: 'Problem registering', error: error.message})
    }

});

export default router;