import mongoose from 'mongoose';
import UserModel from '../../models/User';

export default async function handler(req, res) {
const MONGODB_URI = process.env.MONGO;

try {
    await mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    });

    console.log('Conectado ao MongoDB.');

    const users = await UserModel.find({});
    console.log('Usuários obtidos com sucesso:', users);

    await mongoose.connection.close();

    res.status(200).json(users);
} catch (error) {
    console.error('Erro ao obter usuários:', error);

    res.status(500).json({ error: 'Erro ao obter dados.' });
}
}
