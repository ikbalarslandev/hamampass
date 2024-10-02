-- AlterTable
ALTER TABLE "Admin" ALTER COLUMN "subscriptions" SET DEFAULT ARRAY[]::JSONB[];
