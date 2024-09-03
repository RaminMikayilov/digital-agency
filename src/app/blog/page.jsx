import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

async function getData() {
  const res = await fetch(
    "https://dummyjson.com/posts?limit=3&select=title,body",
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function Blog() {
  const data = await getData();

  return (
    <>
      {data.posts.map((post) => (
        <Link
          href={`/blog/${post.id}`}
          className={styles.container}
          key={post.id}
        >
          <div className={styles.imageContainer}>
            <Image
              src={
                "https://images.pexels.com/photos/261579/pexels-photo-261579.jpeg?auto=compress&cs=tinysrgb&w=600"
              }
              alt=""
              width={400}
              height={250}
              className={styles.image}
            />
          </div>
          <div>
            <h1 className={styles.title}>{post.title}</h1>
            <p className={styles.desc}>{post.body.slice(0, 200)}...</p>
          </div>
        </Link>
      ))}
    </>
  );
}

export default Blog;
