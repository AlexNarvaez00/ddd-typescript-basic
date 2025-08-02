import { Request, Response } from 'express'
import { DomainError } from '../../../../../context/shared/domain/error/DomainError'
import { ResponseHandler } from './ResponseHandler'

export const errorHandler = (
    error: Error,
    request: Request,
    response: Response,
    next: Function
) => {
    if (error.name === 'UnauthorizedError') {
        response.status(401).json({ error: 'Authentication is required' })

        return
    }

    if (error instanceof DomainError) {
        ResponseHandler.error(error.toPrimitives(), response)

        return
    }
}
