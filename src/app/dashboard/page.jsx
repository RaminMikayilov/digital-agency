"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import useSWR from "swr";
import styles from "./page.module.css";

const Dashboard = () => {
  const session = useSession();
  const router = useRouter();

  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, mutate, error, isLoading } = useSWR(
    `/api/posts?username=${session?.data?.user.name}`,
    fetcher
  );

  const handleSubmit = async (e) => {
    e.preventDefault();

    const [title, desc, img, content] = e.target.elements;

    try {
      await fetch("/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: title.value,
          desc: desc.value,
          img: img.value,
          content: content.value,
          username: session?.data?.user.name,
        }),
      });

      mutate();
      e.target.reset();
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`/api/posts/${id}`, {
        method: "DELETE",
      });

      mutate();
    } catch (error) {
      console.error(error);
    }
  };

  if (session.status === "loading") {
    return <div>Loading...</div>;
  }

  if (session.status !== "authenticated") {
    router.push("/dashboard/login");
  }

  if (session.status === "authenticated") {
    return (
      <div className={styles.container}>
        <div className={styles.posts}>
          {isLoading
            ? "loading"
            : data?.map((post) => (
                <div className={styles.post} key={post._id}>
                  <div className={styles.imgContainer}>
                    <Image src={post.img} alt="" width={200} height={100} />
                  </div>
                  <h2 className={styles.postTitle}>{post.title}</h2>
                  <span
                    className={styles.delete}
                    onClick={() => handleDelete(post._id)}
                  >
                    X
                  </span>
                </div>
              ))}
        </div>
        <form className={styles.new} onSubmit={handleSubmit}>
          <h1>Add New Post</h1>
          <input
            type="text"
            placeholder="Title"
            className={styles.input}
            required
          />
          <input
            type="text"
            placeholder="Desc"
            className={styles.input}
            required
          />
          <input
            type="text"
            placeholder="Image"
            className={styles.input}
            required
          />
          <textarea
            placeholder="Content"
            className={styles.textArea}
            cols="30"
            rows="10"
            required
          ></textarea>
          <button className={styles.button}>Send</button>
        </form>
      </div>
    );
  }
};

export default Dashboard;
