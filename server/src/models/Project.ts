import mongoose, { ObjectId } from "mongoose";

const Schema = mongoose.Schema;

export interface Project {
  name: string;
  description: string;
  status: string;
  clientId: ObjectId;
}

export const ProjectSchema = new Schema<Project>({
  description: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["Not Started", "In Progress", "Completed"],
    required: true,
  },
  clientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Client",
    required: true,
  },
});

export const Project = mongoose.model<Project>("Project", ProjectSchema);
