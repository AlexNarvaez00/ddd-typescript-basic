import express, { json } from 'express'
import { errorHandler } from './app/express/v1/shared/handler/ErrorHandler'
import { config } from './context/shared/infrastructure/config'

const app = express()
app.use(json())
app.use(express.urlencoded({ extended: true }))
app.use(errorHandler)

app.listen(config.express.port, () => {
    console.log(`Server is running on port ${config.express.port}`)
})
