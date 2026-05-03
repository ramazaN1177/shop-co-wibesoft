import CommentSide from "./CommentSide";
import type { CommentData } from "./CommentSide";

interface ApiComment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

// API'den yorumları çeken fonksiyon (Sunucu Tarafında Çalışır)
async function getComments(): Promise<CommentData[]> {
  try {
    const res = await fetch(process.env.NEXT_COMMENTS_API_URL as string, {
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      throw new Error("Yorumlar getirilemedi");
    }

    const json = await res.json();
    const comments: ApiComment[] = json.data || [];

    // API verisini CommentCard'ın beklediği yapıya dönüştür
    return comments.slice(0, 9).map((c) => {
      // E-posta adresinden kullanıcı adı oluştur (@ öncesi, ilk harf büyük + nokta)
      const emailName = c.email.split("@")[0];
      const displayName =
        emailName.charAt(0).toUpperCase() + emailName.slice(1) + ".";

      return {
        id: c.id,
        name: displayName,
        text: c.body.replace(/\n/g, " "),
        rating: 5,
        verified: true,
      };
    });
  } catch (error) {
    console.error("Yorum API Hatası:", error);
    return [];
  }
}

export default async function CommentSection() {
  const comments = await getComments();

  return <CommentSide comments={comments} />;
}
