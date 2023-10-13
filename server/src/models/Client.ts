import mongoose from "mongoose";

const Schema = mongoose.Schema;

export interface Client {
  name: string;
  email: string;
  phone: string;
}

export const ClientSchema = new Schema<Client>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
});

export const City = mongoose.model<Client>("Client", ClientSchema);
