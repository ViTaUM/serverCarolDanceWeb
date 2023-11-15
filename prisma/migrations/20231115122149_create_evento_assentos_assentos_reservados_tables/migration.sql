-- CreateTable
CREATE TABLE "Evento" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "img" TEXT NOT NULL,
    "overview" TEXT NOT NULL,
    "releaseDate" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Assentos" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "isAvailable" BOOLEAN NOT NULL,
    "valor" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Assentos_reservas" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome_comprador" TEXT NOT NULL,
    "cpf_comprador" TEXT NOT NULL,
    "email_comprador" TEXT NOT NULL,
    "valor_total" TEXT NOT NULL,
    "data_cadastro" DATETIME NOT NULL
);
