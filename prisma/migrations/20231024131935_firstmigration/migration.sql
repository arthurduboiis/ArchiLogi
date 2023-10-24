/*
  Warnings:

  - You are about to drop the `Sandwitch` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Sandwitch";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Sandwich" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "bread" TEXT NOT NULL,
    "meat" TEXT NOT NULL,
    "salad" TEXT NOT NULL
);
