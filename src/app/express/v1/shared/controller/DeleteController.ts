import { NextFunction, Request, Response } from 'express'

export interface DeleteController {
    destroy(request: Request, response: Response): Promise<void>
}
