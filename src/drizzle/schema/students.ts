import { integer, pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const students = pgTable("students", {
  id: serial("id").primaryKey(),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  age: integer("age").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").$onUpdate(() => new Date()),
});

export type InsertStudent = typeof students.$inferInsert;
export type SelectStudent = typeof students.$inferSelect;
