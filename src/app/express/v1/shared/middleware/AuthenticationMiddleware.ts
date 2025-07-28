import { NextFunction, Request, Response } from 'express'
import { AuthenticationMiddlewareHeaderAuthorizationType } from './AuthenticationMiddlewareHeaderAuthorizationType'

export const authenticationMiddleware = (
    request: Request,
    response: Response,
    next: NextFunction
) => {
    const { authorization } = request.headers
    const [type, token] = authorization?.split(' ') ?? ''

    if (type !== AuthenticationMiddlewareHeaderAuthorizationType.BEARER) {
        throw new Error('Authorization header is required')
    }
}
