-- CreateTable
CREATE TABLE "Student" (
    "id" SERIAL NOT NULL,
    "facultadId" INTEGER NOT NULL,

    CONSTRAINT "Student_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Assignment" (
    "id" SERIAL NOT NULL,
    "profesorId" INTEGER NOT NULL,
    "facultadId" INTEGER NOT NULL,

    CONSTRAINT "Assignment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "studentsOnAssignments" (
    "estudianteId" INTEGER NOT NULL,
    "materiaId" INTEGER NOT NULL,

    CONSTRAINT "studentsOnAssignments_pkey" PRIMARY KEY ("estudianteId","materiaId")
);

-- CreateTable
CREATE TABLE "Teacher" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "apellido" TEXT NOT NULL,
    "facultadId" INTEGER NOT NULL,

    CONSTRAINT "Teacher_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Faculty" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "nombre_decano" TEXT NOT NULL,
    "abreviacion" TEXT NOT NULL,

    CONSTRAINT "Faculty_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_facultadId_fkey" FOREIGN KEY ("facultadId") REFERENCES "Faculty"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Assignment" ADD CONSTRAINT "Assignment_profesorId_fkey" FOREIGN KEY ("profesorId") REFERENCES "Teacher"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Assignment" ADD CONSTRAINT "Assignment_facultadId_fkey" FOREIGN KEY ("facultadId") REFERENCES "Faculty"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "studentsOnAssignments" ADD CONSTRAINT "studentsOnAssignments_estudianteId_fkey" FOREIGN KEY ("estudianteId") REFERENCES "Student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "studentsOnAssignments" ADD CONSTRAINT "studentsOnAssignments_materiaId_fkey" FOREIGN KEY ("materiaId") REFERENCES "Assignment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Teacher" ADD CONSTRAINT "Teacher_facultadId_fkey" FOREIGN KEY ("facultadId") REFERENCES "Faculty"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
