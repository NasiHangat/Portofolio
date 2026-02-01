// src/app/api/reviews/route.ts
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export const revalidate = 0; // Memastikan data selalu fresh

export async function GET() {
  try {
    const reviews = await prisma.peerReview.findMany({
      where: { isApproved: true },
      orderBy: { createdAt: 'desc' },
    });
    return NextResponse.json(reviews);
  } catch (error) {
    return NextResponse.json({ error: "Gagal mengambil data" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const newReview = await prisma.peerReview.create({
      data: {
        name: body.name,
        role: body.role || "Peer",
        project: body.project || "General",
        message: body.message,
        isApproved: false,
      },
    });
    return NextResponse.json(newReview, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Gagal input data" }, { status: 500 });
  }
}