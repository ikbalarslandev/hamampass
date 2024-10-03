import { NextRequest } from "next/server";
import prisma from "@hamampass/db";

const createProperty = async (req: NextRequest) => {
  const { title, amenity, photos, hour, contact, sex, outsider_sex, products } =
    await req.json();

  try {
    const contactRecord = await prisma.contact.create({
      data: {
        city: contact.city,
        district: contact.district,
        address: contact.address,
        location: contact.location,
        phone: contact.phone,
        map_link: contact.map_link,
      },
    });

    const hourRecord = await prisma.hour.create({
      data: {
        weekdays: hour.weekdays,
        weekends: hour.weekends,
        segregated_details: hour.segregated_details,
      },
    });

    const amenityRecord = await prisma.amenity.create({
      data: {
        facilities: amenity.facilities,
        items: amenity.items,
        foods_drinks: amenity.foods_drinks,
      },
    });

    const property = await prisma.property.create({
      data: {
        title,
        amenityId: amenityRecord.id,
        photos,
        sex,
        outsider_sex,
        contactId: contactRecord.id,
        hourId: hourRecord.id,
        products: {
          create: products,
        },
      },
    });

    await prisma.admin.create({
      data: {
        propertyId: property.id,
        password: "1234",
      },
    });

    return property;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to create property");
  }
};

export default createProperty;
