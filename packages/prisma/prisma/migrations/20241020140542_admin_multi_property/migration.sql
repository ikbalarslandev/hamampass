/*
  Warnings:

  - You are about to drop the column `propertyId` on the `Admin` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Admin" DROP CONSTRAINT "Admin_propertyId_fkey";

-- DropIndex
DROP INDEX "Admin_propertyId_key";

-- AlterTable
ALTER TABLE "Admin" DROP COLUMN "propertyId";

-- AlterTable
ALTER TABLE "Property" ADD COLUMN     "adminId" TEXT;

-- AddForeignKey
ALTER TABLE "Property" ADD CONSTRAINT "Property_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "Admin"("id") ON DELETE SET NULL ON UPDATE CASCADE;
