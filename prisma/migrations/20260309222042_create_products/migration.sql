-- CreateTable
CREATE TABLE "products" (
    "id" TEXT NOT NULL,
    "identification_code" TEXT NOT NULL,
    "bar_code" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "tag" TEXT NOT NULL,

    CONSTRAINT "products_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "products_id_key" ON "products"("id");

-- CreateIndex
CREATE UNIQUE INDEX "products_identification_code_key" ON "products"("identification_code");

-- CreateIndex
CREATE UNIQUE INDEX "products_bar_code_key" ON "products"("bar_code");
