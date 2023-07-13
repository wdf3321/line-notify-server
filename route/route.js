import { Router } from 'express'
import { sentwater, sentdtstw } from '../controllers/mail.js'
const router = Router()

router.post('/dtstw', sentdtstw)
router.post('/water', sentwater)


export default router