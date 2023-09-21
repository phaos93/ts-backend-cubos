import { Request, Response } from 'express';
import { knex } from '../../bancodedados/conexao'

export const listarCarros = async (_: Request, res: Response) => {
    try {
        const carros = await knex('carros');
        return res.json(carros);
    } catch {
        return res.status(500).json({ mensagem: 'erro interno do servidor' });
    }
}

export const detalharCarros = async (req: Request, res: Response) => {
    
}

export const cadastrarCarros = async (req: Request, res: Response) => {
    
}

export const atualizarCarros = async (req: Request, res: Response) => {
    
}

export const excluirCarros = async (req: Request, res: Response) => {
    
}