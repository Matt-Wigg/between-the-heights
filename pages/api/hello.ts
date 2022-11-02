// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  images: string[]
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ images: [
    'https://random.dog/6428de50-b94b-4b1a-9cab-63495e637daa.jpg',
    'https://random.dog/21060-3302-20249.jpg',
    'https://random.dog/cbe2f634-069b-4b49-b1ef-2cc2763b9089.jpg',
    'https://random.dog/b031bb2e-7dfa-4d76-83b7-369e2f4ff454.jpg',
  ] })
}
