import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import router from './app/router'
import globalErrorHandler from './app/middleware/globalErrorHandler'
import notFound from './app/error/notFound'
import cookieParser from 'cookie-parser'
const app: Application = express()

// middleware
app.use(express.json())
app.use(
  cors({
    origin: 'http://localhost:3000', // ক্লায়েন্টের URL
    credentials: true, // কুকি পাঠানোর অনুমতি দিতে হবে
  })
)
app.use(cookieParser())
app.use('/api', router)

app.use('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

app.use(globalErrorHandler)
app.use(notFound)

export default app
