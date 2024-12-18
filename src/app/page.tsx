import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>ブログを復習しよう</h1>
      <Link href="/post">みんなの投稿を見る</Link>
      <Link href="/post/create">投稿する</Link>
    </div>
  );
}
