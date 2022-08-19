import { Router } from 'express'
import {
    getArticle,
    getArticlesByUser,
    postArticle,
    deleteArticle
}
from '../controllers/article.controller'

const router = Router()

router
    .route('/:articleId')
    .get(getArticle)
    .delete(deleteArticle)

router
    .route('/username/:username')
    .get(getArticlesByUser)
    .post(postArticle)

export default router