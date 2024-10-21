/*
  Warnings:

  - You are about to drop the column `productId` on the `Practicioner` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Practicioner" DROP CONSTRAINT "Practicioner_productId_fkey";

-- AlterTable
ALTER TABLE "Practicioner" DROP COLUMN "productId";

-- CreateTable
CREATE TABLE "_ProductPracticioners" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ProductPracticioners_AB_unique" ON "_ProductPracticioners"("A", "B");

-- CreateIndex
CREATE INDEX "_ProductPracticioners_B_index" ON "_ProductPracticioners"("B");

-- AddForeignKey
ALTER TABLE "_ProductPracticioners" ADD CONSTRAINT "_ProductPracticioners_A_fkey" FOREIGN KEY ("A") REFERENCES "Practicioner"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProductPracticioners" ADD CONSTRAINT "_ProductPracticioners_B_fkey" FOREIGN KEY ("B") REFERENCES "Product"("id") ON DELETE CASCADE ON UPDATE CASCADE;
