import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

import getCurrentUser from "../../actions/getCurrentUser";

/**
 * Handles POST request to update user profile information
 * @param {Request} request - The incoming HTTP request object
 * @returns {Promise<NextResponse>} JSON response with updated user data or error message
 * @throws {NextResponse} 401 if user is unauthorized
 * @throws {NextResponse} 500 if there's a server error
 */
export async function POST(request: Request) {
  try {
    const currentUser = await getCurrentUser();
    const body = await request.json();
    const { name, image } = body;

    if (!currentUser?.id) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const updatedUser = await prisma.user.update({
      where: {
        id: currentUser.id,
      },
      data: {
        image: image,
        name: name,
      },
    });

    return NextResponse.json(updatedUser);
  } catch (error) {
    console.log(error, "ERROR_MESSAGES");
    return new NextResponse("Error", { status: 500 });
  }
}
