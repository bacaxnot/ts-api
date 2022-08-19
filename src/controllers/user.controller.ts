import { Request, Response } from 'express'

export async function banUserFromArticle(req: Request, res: Response) {
    const articleId = req.params.articleId
    const username = req.params.username
    console.log(articleId, username)
    return res.send('#user banned')
}