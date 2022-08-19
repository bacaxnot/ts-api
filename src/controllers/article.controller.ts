import { Request, Response } from 'express'

export async function getArticle(req: Request, res: Response) {
    const articleId = req.params.articleId
    console.log(articleId)
    return res.send('#article')
}
export async function getArticlesByUser(req: Request, res: Response) {
    const username = req.params.username
    console.log(username)
    return res.send('#articleByUser')
}
export async function postArticle(req: Request, res: Response) {
    const username = req.params.username
    const article = req.body
    console.log(username, article)
    return res.send('article created')
}
export async function deleteArticle(req: Request, res: Response) {
    const articleId = req.params.articleId
    console.log(articleId)
    return res.send('article deleted')
}