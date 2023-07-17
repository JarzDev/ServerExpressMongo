import { Router} from "express";
import { getItems, getItem, postItem, putItem, deleteItem } from "../controllers/item";
import { logMiddleware } from "../middleware/log";

const router = Router();

router.get('/', logMiddleware,  getItems );
router.get('/:id', getItem);
router.post('/', postItem);
router.put('/:id', putItem);
router.delete('/:id', deleteItem);

export {router};