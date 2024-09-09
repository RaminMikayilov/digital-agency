import { NextResponse } from "next/server";
import connect from "@/utils/db";
import posts from "@/models/post";

export const GET = async (req, { params }) => {
  const { id } = params;

  try {
    await connect();
    const post = await posts.findById(id);

    return new NextResponse(JSON.stringify(post), { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
