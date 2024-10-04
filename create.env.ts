import fs from "fs";
import path from "path";

// Create the content for the .env file
const envContent = `
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
AUTH_SECRET=${process.env.AUTH_SECRET}
AUTH_GOOGLE_ID=${process.env.AUTH_GOOGLE_ID}
AUTH_GOOGLE_SECRET=${process.env.AUTH_GOOGLE_SECRET}
DATABASE_URL=${process.env.DATABASE_URL}
BASE_URL=${process.env.BASE_URL}
VAPID_PUBLIC_KEY=${process.env.VAPID_PUBLIC_KEY}
VAPID_PRIVATE_KEY=${process.env.VAPID_PRIVATE_KEY}
`;

// Write the content to a .env file
fs.writeFileSync(path.resolve(__dirname, ".env"), envContent.trim(), {
  encoding: "utf8",
});

console.log(".env file created successfully.");
