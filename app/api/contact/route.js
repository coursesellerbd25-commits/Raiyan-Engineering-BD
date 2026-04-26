import clientPromise from "@/lib/mongodb";

export async function POST(req) {
    try {
        const body = await req.json();
        const { name, email, message } = body;

        //Basic Validation
        if (!name || !email || !message) {
            return Response.json(
                { error: "All fields are required" },
                { status: 400 }
            );
        }

        const client = await clientPromise;
        const db = client.db("contactDB"); //you can rename
        const result = await db.collection("messages").insertOne({
            name, 
            email, 
            message,
            createdAt: new Date(),
        });

        return Response.json({
            success: true, 
            id: result.insertedId,
        });

    } catch (err) {
        console.error(err);
        return Response.json(
            { error: "DataBase Error!"},
            { status: 500 }
        );
    }
}