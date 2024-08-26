/*
  Warnings:

  - You are about to drop the column `sex` on the `Hour` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Hour" DROP COLUMN "sex",
ADD COLUMN     "segregated_details" JSONB;
