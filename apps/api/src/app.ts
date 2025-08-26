import express, { Application, Request, Response } from 'express'

const app: Application = express()
const port: number = 8000

app.get('/', (req: Request, res: Response) => {
    res.send('Hello from Express API')
})

app.listen(port, () => {
    console.log(`API Server running at http://localhost:${port}`)
})