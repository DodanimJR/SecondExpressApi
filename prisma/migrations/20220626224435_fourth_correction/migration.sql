/*
  Warnings:

  - You are about to drop the `studentsOnAssignments` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "studentsOnAssignments" DROP CONSTRAINT "studentsOnAssignments_estudianteId_fkey";

-- DropForeignKey
ALTER TABLE "studentsOnAssignments" DROP CONSTRAINT "studentsOnAssignments_materiaId_fkey";

-- DropTable
DROP TABLE "studentsOnAssignments";

-- CreateTable
CREATE TABLE "Matricula" (
    "id" SERIAL NOT NULL,
    "estudianteId" INTEGER NOT NULL,
    "materiaId" INTEGER NOT NULL,

    CONSTRAINT "Matricula_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Matricula" ADD CONSTRAINT "Matricula_estudianteId_fkey" FOREIGN KEY ("estudianteId") REFERENCES "Student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Matricula" ADD CONSTRAINT "Matricula_materiaId_fkey" FOREIGN KEY ("materiaId") REFERENCES "Assignment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
