import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

const employees = [
    {
        firstName: "Alina",
        lastName: "Aqil",
        pseudoName: "Erica James",
        email: "ericajames@mamamail.cloud",
        password: "zevitech@123",
    },
    {
        firstName: "Hania",
        lastName: "Shifa",
        pseudoName: "Jenny Blake",
        email: "jennyblake@mamamail.cloud",
        password: "zevitech@123",
    },
    {
        firstName: "Maaz",
        lastName: "Haroon",
        pseudoName: "John Marshall",
        email: "johnmarshall@mamamail.cloud",
        password: "zevitech@123",
    },
    {
        firstName: "Daniyal",
        lastName: "Ali",
        pseudoName: "Daniel Davis",
        email: "danieldavis@mamamail.cloud",
        password: "zevitech@123",
    },
    {
        firstName: "Mohammad",
        lastName: "Wasif",
        pseudoName: "Michael Rich",
        email: "michaelrich@mamamail.cloud",
        password: "zevitech@123",
    },
    {
        firstName: "Sufiyan",
        lastName: "Khan",
        pseudoName: "Marcus Vale",
        email: "marcusvale@mamamail.cloud",
        password: "zevitech@123",
    },
    {
        firstName: "Talha",
        lastName: "Farooq",
        pseudoName: "Peter Macdell",
        email: "petermacdell@mamamail.cloud",
        password: "zevitech@123",
    },
    {
        firstName: "Hibroon",
        lastName: "Bhatti",
        pseudoName: "Matthew Schwab",
        email: "matthewschwab@mamamail.cloud",
        password: "zevitech@123",
    },
    {
        firstName: "Maria",
        lastName: "Khan",
        pseudoName: "Linda Susan",
        email: "lindasusan@mamamail.cloud",
        password: "zevitech@123",
    },
];

async function main() {
    for (const emp of employees) {
        const existing = await prisma.user.findUnique({
            where: { email: emp.email },
        });

        if (existing) {
            console.log(`⚠ User already exists: ${emp.email}`);
            continue;
        }

        const hashedPassword = await bcrypt.hash(emp.password, 10);

        await prisma.user.create({
            data: {
                firstName: emp.firstName,
                lastName: emp.lastName,
                pseudoName: emp.pseudoName,
                email: emp.email,
                password: hashedPassword,
                isActive: true,
            },
        });

        console.log(`✅ Employee created: ${emp.email}`);
    }
}

main()
    .catch((e) => {
        console.error("❌ Error seeding employees:", e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
