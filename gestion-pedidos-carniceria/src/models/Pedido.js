const mongoose = require('mongoose');

const LineaSchema = new mongoose.Schema({
  producto: String,
  cantidad: Number,
  formato: String,
  comentario: String,
  cantidadEnviada: Number,
  lote: String,
  preparada: Boolean,
  peso: Number // Añadido campo peso
});

const PedidoSchema = new mongoose.Schema({
  tiendaId: String,
  estado: { type: String, default: 'enviado' },
  numeroPedido: Number,
  lineas: [LineaSchema],
  fechaCreacion: { type: Date, default: Date.now },
  fechaPedido: Date,
  fechaEnvio: Date,
  fechaRecepcion: Date
}, { timestamps: true });

module.exports = mongoose.model('Pedido', PedidoSchema);