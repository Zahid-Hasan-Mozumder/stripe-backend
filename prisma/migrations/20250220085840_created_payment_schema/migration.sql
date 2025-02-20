-- CreateTable
CREATE TABLE "Payment" (
    "id" SERIAL NOT NULL,
    "userEmail" TEXT NOT NULL,
    "amount" DECIMAL(65,30) NOT NULL DEFAULT 0,

    CONSTRAINT "Payment_pkey" PRIMARY KEY ("id")
);
