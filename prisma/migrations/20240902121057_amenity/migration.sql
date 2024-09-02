/*
  Warnings:

  - You are about to drop the column `phone` on the `Contact` table. All the data in the column will be lost.
  - You are about to drop the column `amenities` on the `Property` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Contact" DROP COLUMN "phone";

-- AlterTable
ALTER TABLE "Property" DROP COLUMN "amenities",
ADD COLUMN     "amenityId" TEXT;

-- CreateTable
CREATE TABLE "Amenity" (
    "id" TEXT NOT NULL,
    "items" INTEGER[],
    "facilities" INTEGER[],
    "foods_drinks" INTEGER[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Amenity_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Property" ADD CONSTRAINT "Property_amenityId_fkey" FOREIGN KEY ("amenityId") REFERENCES "Amenity"("id") ON DELETE SET NULL ON UPDATE CASCADE;
