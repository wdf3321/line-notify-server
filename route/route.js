import { Router } from 'express'
import { sentwater, sentdtstw,sentbing } from '../controllers/mail.js'
const router = Router()

router.post('/dtstw', sentdtstw)
router.post('/water', sentwater)
router.post('/bing', sentbing)


export default router