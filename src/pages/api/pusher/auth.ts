import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";

import { authOptions } from "../../../app/api/auth/[...nextauth]/route";
import { pusherServer } from "../../../app/libs/pusher";

/**
 * Handles authentication for Pusher channel authorization
 * @param {NextApiRequest} request - The incoming API request
 * @param {NextApiResponse} response - The outgoing API response
 * @returns {Promise<void>} Sends the Pusher authorization response or a 401 status
 */
export default async function handler(request: NextApiRequest, response: NextApiResponse) {
  const session = await getServerSession(request, response, authOptions);

  if (!session?.user?.email) {
    return response.status(401);
  }

  const socketId = request.body.socket_id;
  const channel = request.body.channel_name;
  const data = {
    user_id: session.user.email,
  };

  const authResponse = pusherServer.authorizeChannel(socketId, channel, data);
  return response.send(authResponse);
}
