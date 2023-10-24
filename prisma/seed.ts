import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function createSandwich(bread: string, meat: string, salad: string) {
    const sandwich = await prisma.sandwich.create({
        data: {
            bread,
            meat,
            salad,
        },
    });

    return sandwich;
}


async function main() {
    const admin = await prisma.user.upsert({
        where: { username: "admin" },
        update: {},
        create: {
            username: "admin",
            password: "password",
            roles: {
                connectOrCreate: [
                    { where: { label: "admin" }, create: { label: "admin" } },
                    { where: { label: "user" }, create: { label: "user" } }
                ]
            }
        }
    });

    const newSandwich = await createSandwich("Wheat", "Turkey", "Lettuce");
    const newSandwich2 = await createSandwich("White", "Ham", "Tomato");
    const newSandwich3 = await createSandwich("Rye", "Beef", "Onion");

}

main();