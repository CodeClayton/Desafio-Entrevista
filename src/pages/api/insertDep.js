// src/pages/api/insertDep.js
import mongoose from 'mongoose';
import UserModel from '../../models/User';

export default async function handler(req, res) {
  const MONGODB_URI = process.env.MONGO;

  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Método não permitido' });
    return;
  }

  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('Conectado ao MongoDB.');

    const { name, depoiment, course } = req.body;

    if (!name || !depoiment || !course) {
      res.status(400).json({ error: 'Todos os campos são obrigatórios.' });
      return;
    }

    const newUser = new UserModel({
      name,
      depoiment,
      course,
    });

    const savedUser = await newUser.save();
    console.log('Usuário inserido com sucesso:', savedUser);

    await mongoose.connection.close();

    res.status(200).json({ message: 'Dados inseridos com sucesso.', user: savedUser });
  } catch (error) {
    console.error('Erro ao inserir usuário:', error);

    res.status(500).json({ error: 'Erro ao inserir dados.' });
  }
}
