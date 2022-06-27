/*
  Warnings:

  - Added the required column `nombre` to the `Student` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Student" ADD COLUMN     "nombre" TEXT NOT NULL;
