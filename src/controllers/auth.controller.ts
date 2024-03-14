import { Request, Response } from 'express';

export const login = (req: Request, res: Response) => {
  try {
    const result = req.body;

    console.log(result);
    res.send('login...');
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
};
