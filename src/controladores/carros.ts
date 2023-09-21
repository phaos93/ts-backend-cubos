import { Request, Response } from 'express';
import { knex } from '../../bancodedados/conexao'
import { Carro } from '../tipos'

export const listarCarros = async (_: Request, res: Response) => {
    try {
        const carros = await knex<Carro>('carros');
        return res.json(carros);
    } catch {
        return res.status(500).json({ mensagem: 'erro interno do servidor' });
    }
}

export const detalharCarros = async (req: Request, res: Response) => {
    const { id } = req.params;
        try {
            const carro = await knex<Carro>('carros')
                .where({ id: Number(id) })
                .first();
            
            if (!carro) {
                return res.status(404).json({ mensagem: 'carro não encontrado' });
            }
            
            return res.json(carro);
    } catch {
        return res.status(500).json({ mensagem: 'erro interno do servidor' });
    }
}

export const cadastrarCarros = async (req: Request, res: Response) => {
    const { marca, modelo, cor, ano, valor } = req.body;
    try {
        const carro = await knex<Omit<Carro, 'id'>>('carros').insert({
            marca,
            modelo,
            cor,
            ano,
            valor
        }).returning('*');

        return res.status(201).json(carro[0]);
    } catch {
        return res.status(500).json({ mensagem: 'erro interno do servidor' });
    }
}

export const atualizarCarros = async (req: Request, res: Response) => {
    
}

export const excluirCarros = async (req: Request, res: Response) => {
    
}