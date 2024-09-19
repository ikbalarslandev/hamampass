/*
  Warnings:

  - You are about to drop the column `subscriptions` on the `Admin` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Admin" DROP COLUMN "subscriptions",
ADD COLUMN     "subscription" JSONB;
