import { Router } from 'express'
import { sentwater, sentdtstw,sentbing ,sentshanghui} from '../controllers/mail.js'
const router = Router()

router.post('/dtstw', sentdtstw)
router.post('/water', sentwater)
router.post('/bing', sentbing)
router.post('/shanghui', sentshanghui)

export default router