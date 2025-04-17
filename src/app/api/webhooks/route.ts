import prisma from "@/lib/prisma";
import { clerkClient } from "@clerk/nextjs/server";
import { verifyWebhook } from "@clerk/nextjs/webhooks";
import { USER_TYPE } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const evt = await verifyWebhook(req);
    const clerk = await clerkClient();

    // Do something with payload
    // For this guide, log payload to console
    const { id } = evt.data;
    const eventType = evt.type;
    console.log(
      `Received webhook with ID ${id} and event type of ${eventType}`
    );
    console.log("Webhook payload:", evt.data);

    if (evt.type === "user.created") {
      if (!evt.data.id) {
        return new NextResponse("Error occurred -- missing data", {
          status: 400,
        });
      }

      //   const userType = evt.data.public_metadata.userType ?? USER_TYPE.STUDENT ;

      await prisma.userAccount.create({
        data: {
          email: evt.data.email_addresses[0].email_address,
          clerkId: evt.data.id,
          isVerified: false,
          isActive: true,
          userType: USER_TYPE.STUDENT,
        },
      });

      await clerk.users.updateUser(evt.data.id, {
        publicMetadata: { userType: USER_TYPE.STUDENT },
      });
    }

    if (eventType === "user.deleted") {
      await prisma.userAccount.delete({
        where: {
          clerkId: evt.data.id,
        },
      });
    }

    return new NextResponse("Webhook received", { status: 200 });
  } catch (err) {
    console.error("Error verifying webhook:", err);
    return new NextResponse("Error verifying webhook", { status: 400 });
  }
}
