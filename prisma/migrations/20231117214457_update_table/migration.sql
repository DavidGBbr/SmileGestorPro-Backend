/*
  Warnings:

  - You are about to drop the column `procedureId` on the `services` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `services` table. All the data in the column will be lost.
  - Added the required column `procedure_id` to the `services` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `services` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "services" DROP CONSTRAINT "services_procedureId_fkey";

-- DropForeignKey
ALTER TABLE "services" DROP CONSTRAINT "services_userId_fkey";

-- DropIndex
DROP INDEX "services_procedureId_key";

-- DropIndex
DROP INDEX "services_userId_key";

-- AlterTable
ALTER TABLE "services" DROP COLUMN "procedureId",
DROP COLUMN "userId",
ADD COLUMN     "procedure_id" TEXT NOT NULL,
ADD COLUMN     "user_id" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "services" ADD CONSTRAINT "services_procedure_id_fkey" FOREIGN KEY ("procedure_id") REFERENCES "procedures"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "services" ADD CONSTRAINT "services_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
