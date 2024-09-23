-- CreateTable
CREATE TABLE "Bar" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Bar_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Beer" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "style" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "abv" DOUBLE PRECISION NOT NULL,
    "barId" INTEGER NOT NULL,

    CONSTRAINT "Beer_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Beer" ADD CONSTRAINT "Beer_barId_fkey" FOREIGN KEY ("barId") REFERENCES "Bar"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
