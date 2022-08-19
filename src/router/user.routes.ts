import { Router } from 'express'
import { banUserFromArticle } from '../controllers/user.controller'

const router = Router()

router
    .route('/:username/:articleId')
    .delete(banUserFromArticle)

export default router