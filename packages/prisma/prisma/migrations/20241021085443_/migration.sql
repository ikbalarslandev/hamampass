-- CreateTable
CREATE TABLE "Practicioner" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "photo" TEXT NOT NULL,
    "exp_tr" TEXT NOT NULL,
    "exp_en" TEXT NOT NULL,
    "productId" TEXT,

    CONSTRAINT "Practicioner_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Practicioner" ADD CONSTRAINT "Practicioner_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE SET NULL ON UPDATE CASCADE;
