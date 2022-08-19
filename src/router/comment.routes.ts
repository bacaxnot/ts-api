import { Router } from 'express'
import {
    getComments,
    postComment,
    deleteComment
}
from '../controllers/comment.controller'

const router = Router()

router
    .route('/:articleId')
    .get(getComments)

router
    .route('/:articleId/:username')
    .post(postComment)
    .delete(deleteComment)

export default router