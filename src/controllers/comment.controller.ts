import { Request, Response } from 'express'

export async function getComments(req: Request, res: Response) {
    const articleId = req.params.articleId
    console.log(articleId)
    return res.send('#article')
}
export async function postComment(req: Request, res: Response) {
    const username = req.params.username
    const articleId = req.params.articleId
    const comment = req.body
    console.log(username, articleId, comment)
    return res.send('article created')
}
export async function deleteComment(req: Request, res: Response) {
    const username = req.params.username
    const articleId = req.params.articleId
    console.log(articleId, username)
    return res.send('article deleted')
}