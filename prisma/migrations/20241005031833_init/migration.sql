/*
  Warnings:

  - You are about to drop the column `accountId` on the `Product` table. All the data in the column will be lost.
  - Added the required column `accountId` to the `ProductCategory` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_accountId_fkey";

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "accountId";

-- AlterTable
ALTER TABLE "ProductCategory" ADD COLUMN     "accountId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "ProductCategory" ADD CONSTRAINT "ProductCategory_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
