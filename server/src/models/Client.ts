import mongoose from "mongoose";

const Schema = mongoose.Schema;

export interface ClientType {
  name: string;
  email: string;
  phone: string;
}

export const ClientSchema = new Schema<ClientType>({
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

export const Client = mongoose.model<ClientType>("Client", ClientSchema);
