/*
  Warnings:

  - Added the required column `cuatrimestre` to the `Matricula` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Matricula" ADD COLUMN     "cuatrimestre" TEXT NOT NULL;
