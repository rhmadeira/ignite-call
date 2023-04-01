-- CreateTable
CREATE TABLE "users" (
    "Id" TEXT NOT NULL PRIMARY KEY,
    "username" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateIndex
CREATE UNIQUE INDEX "users_username_key" ON "users"("username");
