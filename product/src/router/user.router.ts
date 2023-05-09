import * as express from 'express';
import { Router } from 'express';
import {
  createPlayer,
  getAllPlayers
} from '../controller/user.controller';


const router: Router = express.Router();

router.get('/', getAllPlayers);
router.post('/', createPlayer);



export default router;