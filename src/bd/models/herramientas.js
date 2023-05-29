import { Schema, model } from 'mongoose';
const herramientasSchema = new Schema({
    categoria: {
        type: String,
        required: true},
    tipo: {
        type: String,
        required: true},
    fecha: {
        type: Number,
        required: true},
});

export default model('Herramientas', herramientasSchema);
