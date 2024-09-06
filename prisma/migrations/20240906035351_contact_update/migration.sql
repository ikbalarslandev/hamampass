/*
  Warnings:

  - Made the column `map_link` on table `Contact` required. This step will fail if there are existing NULL values in that column.
  - Made the column `phone` on table `Contact` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Contact" ALTER COLUMN "map_link" SET NOT NULL,
ALTER COLUMN "phone" SET NOT NULL;
