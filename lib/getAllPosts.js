export default async function getAllPosts() {

    const res = await fetch(
        "https://basic-blog.teamrabbil.com/api/post-categories",
        {
            next: {
                revalidate: 60,
            },
        }
    );

    if (!res.ok) {
        throw new Error("Error fetching posts");
    }

    return res.json();
}