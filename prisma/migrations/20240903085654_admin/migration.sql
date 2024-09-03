/*
  Warnings:

  - You are about to drop the column `outsiders` on the `Hour` table. All the data in the column will be lost.
  - You are about to drop the column `adminId` on the `Property` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Hour" DROP COLUMN "outsiders";

-- AlterTable
ALTER TABLE "Property" DROP COLUMN "adminId",
ADD COLUMN     "outsider_sex" JSONB[];

-- CreateTable
CREATE TABLE "Admin" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "propertyId" TEXT NOT NULL,

    CONSTRAINT "Admin_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Admin_userId_key" ON "Admin"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Admin_propertyId_key" ON "Admin"("propertyId");

-- AddForeignKey
ALTER TABLE "Admin" ADD CONSTRAINT "Admin_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Admin" ADD CONSTRAINT "Admin_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "Property"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
