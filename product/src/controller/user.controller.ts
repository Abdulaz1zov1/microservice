import { getRepository } from 'typeorm';
import { Request, Response } from 'express';
import { User } from '../entity/user';

export const createPlayer = async (req: Request, res: Response) => {
  let player = new User();
  player = { ...req.body };

  const playerRepository = getRepository(User);

  await playerRepository.save(player);
  res.send(player);
};

export const getAllPlayers = async (req: Request, res: Response) => {
  const playerRepository = getRepository(User);

  const players = await playerRepository.find();
  res.send(players);
};


