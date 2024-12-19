import { bigint, pgTable, timestamp, text } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: bigint({ mode: "number" }),
  createdAt: timestamp({ mode: "string" }),
  disabled: bigint({ mode: "number" }),
  email: text(),
  isAdmin: bigint({ mode: "number" }),
  name: text().default(""),
  password: text().notNull(),
  phone: text(),
  profileImage: text(),
  updatedAt: timestamp({ mode: "string" }),
});

export const createUserSchema = createInsertSchema(users).omit({ id: true });

export type UserType = z.infer<typeof createUserSchema>;
