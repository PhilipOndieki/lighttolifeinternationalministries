"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { use } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { getBlogById, BlogPost } from "../../lib/firebase/firestore";
import styles from "../news.module.css";

export default function NewsDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const [blog, setBlog] = useState<(BlogPost & { id: string }) | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadBlog = async () => {
      setLoading(true);
      const fetchedBlog = await getBlogById(id);
      setBlog(fetchedBlog);
      setLoading(false);
    };

    if (id) {
      void loadBlog();
    }
  }, [id]);

  if (loading) {
    return (
      <div className={styles.page}>
        <Navbar />
        <div className={styles.container}>Loading blog...</div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className={styles.page}>
        <Navbar />
        <main className={styles.main}>
          <section className={styles.sectionContainer}>
            <div className={styles.blogDetail}>
              <h1 className={styles.blogTitle}>Blog not found</h1>
              <p className={styles.blogExcerpt}>
                The requested blog could not be found. It may have been deleted or the link is incorrect.
              </p>
              <Link href="/news" className={styles.readMore}>
                Back to news
              </Link>
            </div>
          </section>
        </main>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <Navbar />
      <main className={styles.main}>
        <section className={styles.sectionContainer}>
          <div className={styles.blogDetail}>
            <Link href="/news" className={styles.readMore}>
              ← Back to news
            </Link>
            <div className={styles.detailImage}>
              {blog.imageUrl ? (
                <Image
                  src={blog.imageUrl}
                  alt={blog.title}
                  fill
                  sizes="100vw"
                  style={{ objectFit: "cover" }}
                />
              ) : (
                <div className={styles.imagePlaceholder}>Featured Image</div>
              )}
            </div>
            <div className={styles.detailHeader}>
              <span className={styles.blogDate}>{blog.date}</span>
              <h1 className={styles.blogTitle}>{blog.title}</h1>
              <div className={styles.blogMeta}>
                <span>{blog.author}</span>
                <span>{blog.category}</span>
                {blog.branch ? <span>{blog.branch}</span> : null}
              </div>
            </div>
            <div className={styles.detailContent}>
              <p>{blog.content}</p>
            </div>

            {(blog.additionalImageUrls && blog.additionalImageUrls.length > 0) && (
              <div className={styles.additionalImagesGallery}>
                <h2 className={styles.galleryTitle}>Blog Images</h2>
                <div className={styles.galleryGrid}>
                  {blog.additionalImageUrls.map((imageUrl, index) => (
                    <div key={`${imageUrl}-${index}`} className={styles.galleryItem}>
                      <Image
                        src={imageUrl}
                        alt={`${blog.title} image ${index + 1}`}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}
