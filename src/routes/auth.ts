import { Router} from "express";
import {regCtrl, loginCtrl} from "../controllers/register";
import {registerNewUser, loginUser} from "../services/auth.services";

const router = Router();

router.post('/register', regCtrl );
router.post('/login', loginCtrl);


export {router};