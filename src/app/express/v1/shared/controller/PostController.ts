import { NextFunction, Request, Response } from 'express'

export interface PostController {
    save(request: Request, response: Response): Promise<void>
}
