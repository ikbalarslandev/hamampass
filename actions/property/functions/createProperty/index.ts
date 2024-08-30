import { NextRequest } from "next/server";
import prisma from "@/prisma/db";

const createProperty = async (req: NextRequest) => {
  const { title, amenities, photos, hour, contact, sex, products } =
    await req.json();

  try {
    const contactRecord = await prisma.contact.create({
      data: {
        phone: contact.phone,
        city: contact.city,
        district: contact.district,
        address: contact.address,
        location: contact.location,
      },
    });

    const hourRecord = await prisma.hour.create({
      data: {
        weekdays: hour.weekdays,
        weekends: hour.weekends,
        outsiders: hour.outsiders || [],
        segregated_details: hour.segregated_details,
      },
    });

    const property = await prisma.property.create({
      data: {
        title,
        amenities,
        photos,
        sex,
        contactId: contactRecord.id,
        hourId: hourRecord.id,
        products: {
          create: products,
        },
      },
    });

    return property;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to create property");
  }
};

export default createProperty;
