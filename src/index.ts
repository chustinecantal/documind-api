import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000

// Middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Health check
app.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'DocuMind API is running!',
    version: '1.0.0'
  })
})

// Start server
app.listen(PORT, () => {
  console.log(`DocuMind API running on port ${PORT}`)
  console.log(`Environment: ${process.env.NODE_ENV}`)
})

export default app