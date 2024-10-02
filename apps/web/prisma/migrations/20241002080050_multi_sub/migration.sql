/*
  Warnings:

  - You are about to drop the column `subscription` on the `Admin` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Admin" DROP COLUMN "subscription",
ADD COLUMN     "subscriptions" JSONB[];
