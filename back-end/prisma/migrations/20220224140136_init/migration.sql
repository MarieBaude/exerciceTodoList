-- CreateTable
CREATE TABLE "List" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "cathegoryId" INTEGER NOT NULL,

    CONSTRAINT "List_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cathegory" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Cathegory_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "List_cathegoryId_key" ON "List"("cathegoryId");

-- AddForeignKey
ALTER TABLE "List" ADD CONSTRAINT "List_cathegoryId_fkey" FOREIGN KEY ("cathegoryId") REFERENCES "Cathegory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
