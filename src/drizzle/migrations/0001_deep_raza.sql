ALTER TABLE "students" ALTER COLUMN "updated_at" SET DEFAULT now();--> statement-breakpoint
ALTER TABLE "students" ALTER COLUMN "updated_at" DROP NOT NULL;