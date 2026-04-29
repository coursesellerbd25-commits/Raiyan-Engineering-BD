export async function GET(req) {
    const { searchParams } = new URL(req.url);
    const q = searchParams.get("q")?.toLowerCase() || "";

    const data = [
        { title: "Home", link: "/" },
        { title: "About", link: "/about" },
        { title: "Supply", link: "/supply" },
        { title: "Contact", link: "/contact" },
    ];

    const filtered = data.filter(item => 
        item.title.toLowerCase().includes(q)
    );

    return Response.json(filtered);
}