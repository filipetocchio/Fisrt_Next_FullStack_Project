import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    name: string
}

export default function hadler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    res.status(200).json ({ name: 'john Doe'})
}