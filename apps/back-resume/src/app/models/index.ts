import { ModelDefinition } from "@nestjs/mongoose";
import { Resume, ResumeSchema } from "./resume.model";

export * from "./resume.model";
export * from "./certification.model";
export * from "./course-work.model";
export * from "./education.model";
export * from "./experience.model";
export * from "./hobby.model";
export * from "./involvement.model";
export * from "./language.model";
export * from "./project.model";
export * from "./resume.model";
export * from "./skill.model";

export const models: ModelDefinition[] = [
  { name: Resume.name, schema: ResumeSchema },
];
