import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

async function getData() {
  const res = await fetch("http://localhost:3000/api/posts", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export const metadata = {
  title: "Digital Agency | Blog",
  description: "Digital Agency | Blog",
};

async function Blog() {
  const data = await getData();

  return (
    <>
      {data?.map((post) => (
        <Link
          href={`/blog/${post._id}`}
          className={styles.container}
          key={post._id}
        >
          <div className={styles.imageContainer}>
            <Image
              src={post.img}
              alt=""
              width={400}
              height={250}
              className={styles.image}
            />
          </div>
          <div>
            <h1 className={styles.title}>{post.title}</h1>
            <p className={styles.desc}>
              {post.desc.length > 200 ? post.desc.slice(0, 200) : post.desc}
            </p>
          </div>
        </Link>
      ))}
    </>
  );
}

export default Blog;
