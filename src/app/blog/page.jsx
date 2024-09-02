import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

function Blog() {
  return (
    <>
      <Link href="/blog/5" className={styles.container}>
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
          <h1 className={styles.title}>Title</h1>
          <p className={styles.desc}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse,
            architecto facere? Itaque nulla voluptatum illo!
          </p>
        </div>
      </Link>
      <Link href="/blog/5" className={styles.container}>
        <div className={styles.imageContainer}>
          <Image
            src={
              "https://images.pexels.com/photos/3194523/pexels-photo-3194523.jpeg?auto=compress&cs=tinysrgb&w=600"
            }
            alt=""
            width={400}
            height={250}
            className={styles.image}
          />
        </div>
        <div>
          <h1 className={styles.title}>Title</h1>
          <p className={styles.desc}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse,
            architecto facere? Itaque nulla voluptatum illo!
          </p>
        </div>
      </Link>
    </>
  );
}

export default Blog;
