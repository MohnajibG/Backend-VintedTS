import mongoose, { Schema, Document } from "mongoose";

// Interface pour le modèle d'offre
interface Offer extends Document {
  userId: mongoose.Types.ObjectId;
  title: string;
  description: string;
  price: number;
  condition: string;
  city: string;
  brand: string;
  size: string;
  color: string;
  pictures: string[]; // Tableau d'URLs des images
  createdAt: Date;
}

const OfferSchema: Schema = new Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Référence au modèle "User"
      required: true,
    },
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    condition: { type: String, required: true },
    city: { type: String, required: true },
    brand: { type: String, required: true },
    size: { type: String, required: true },
    color: { type: String, required: true },
    pictures: { type: [String], required: true }, // Tableau d'URLs des images
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true } // Pour avoir les champs createdAt et updatedAt automatiquement
);

// Création du modèle Mongoose basé sur le schéma
const OfferModel = mongoose.model<Offer>("Offer", OfferSchema);

export default OfferModel;
