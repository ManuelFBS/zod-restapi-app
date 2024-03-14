import { Router } from 'express';
import { login } from '../controllers/auth.controller';
import { schemaValidation } from '../middlewares/schemaValidator.middleware';
import { LoginSchema } from '../libs/schemas/auth.schema';

const router: Router = Router();

router.post('/login', schemaValidation(LoginSchema), login);

export default router;
