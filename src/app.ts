import express, { Application } from 'express'
import morgan from 'morgan'
import cors from 'cors'

import IndexRoutes from "./router/index.routes"
import UserRoutes from "./router/user.routes"
import CommentRoutes from "./router/comment.routes"
import ArticleRoutes from "./router/article.routes"

export class App {
    private app: Application
    
    constructor(private port?: number | string){
        this.app = express()
        this.settings()
        this.middlewares()
        this.routes()
    }
    settings(){
        this.app.set('port', this.port || process.env.PORT || 3000)
    }
    middlewares(){
        this.app.use(express.json())
        this.app.use(cors())
        this.app.use(morgan('dev'))
    }
    routes(){
        this.app.use('/v1', IndexRoutes)
        this.app.use('/v1/users', UserRoutes)
        this.app.use('/v1/comments', CommentRoutes)
        this.app.use('/v1/articles', ArticleRoutes)
    }
    async listen(){
        let PORT = this.app.get('port')
        await this.app.listen(PORT)
        console.log(`App running on port ${PORT}...`)
    }

}