import { Router, Request, Response } from "express"
import { readFile } from "fs/promises"
import Phrase from '../interfaces/Phrase'
import { config } from "dotenv"

config()

export const router: Router = Router()

router.get("/philosophical-phrases/get-phrase", async (request: Request, response: Response) => {
  const file = await readFile(process.env.DATABASE_PATH as string, "utf-8")
  const phrases = JSON.parse(file) as Phrase[]
  const randomIndex = Math.floor(Math.random() * phrases.length)
  const randomPhrase = phrases[randomIndex]
  response.status(200).json(randomPhrase)
})