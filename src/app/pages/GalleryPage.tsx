import { ImageIcon } from 'lucide-react';
import { Link } from "react-router-dom";
import img1 from "../assets/images/gallery/img1.jpeg";
import img2 from "../assets/images/gallery/img2.jpeg";
import img3 from "../assets/images/gallery/img3.jpeg";
import img4 from "../assets/images/gallery/img4.jpeg";
import img5 from "../assets/images/gallery/img5.jpeg";
import img6 from "../assets/images/gallery/img6.jpeg";
import img7 from "../assets/images/gallery/img7.jpeg";
import img8 from "../assets/images/gallery/img8.jpeg";
import img9 from "../assets/images/gallery/img9.jpeg";
import img10 from "../assets/images/gallery/img10.jpeg";
import img11 from "../assets/images/gallery/img11.jpeg";
import img12 from "../assets/images/gallery/img12.jpeg";
import img13 from "../assets/images/gallery/img13.jpeg";
import img14 from "../assets/images/gallery/img14.jpeg";
import img15 from "../assets/images/gallery/img15.jpeg";
import img16 from "../assets/images/gallery/img16.jpeg";
import img17 from "../assets/images/gallery/img17.jpeg";
import img18 from "../assets/images/gallery/img18.jpeg";
import img19 from "../assets/images/gallery/img19.jpeg";
import img20 from "../assets/images/gallery/img20.jpeg";

export function GalleryPage() {
 const albums = [
  {
    id: "family-reunion-2025",
    title: "Family Reunion 2025",
    date: "January 2025",
    coverImage: img1,
    photos: [img1, img2, img3, img4],
  },
  {
    id: "walimah-ahmad-siti",
    title: "Walimah - Ahmad & Siti",
    date: "December 2024",
    coverImage: img5,
    photos: [img5, img6, img7, img8],
  },
  {
    id: "wedding-walimah",
    title: "wedding-walimah",
    date: "1950s - 1990s",
    coverImage: img9,
    photos: [img9, img10, img11, img12],
  },
  {
    id: "Danmaliki Jnr's Walimah",
    title: "Danmaliki Jnr's Walimah",
    date: "1950s - 1990s",
    coverImage: img13,
    photos: [img13, img14, img15, img16],
  },
  {
    id: "Eid Walimah",
    title: "Eid Walimah",
    date: "2023 - 2024s",
    coverImage: img17,
    photos: [img17, img18, img19, img20],
  },
];


  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="mb-12 text-center">
          <h1 className="mb-4">Photo Gallery</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Browse through our collection of cherished family moments, from historic photographs to recent celebrations.
            Each image tells a story of our shared heritage and precious memories.
          </p>
        </div>

        {/* Albums Grid */}
       {albums.map((album) => (
 <Link
  to={`/gallery/${album.id}`}
  key={album.id}
  className="
    group
    rounded-xl
    overflow-hidden
    bg-card
    border
    border-border
    shadow-sm
    hover:shadow-lg
    transition-all
    hover:-translate-y-1
  "
>
  {/* Image Area */}
  <div className="relative bg-muted flex items-center justify-center aspect-[4/3] p-3">
    <img
      src={album.coverImage}
      alt={album.title}
      className="
        max-h-full
        max-w-full
        object-contain
        rounded-lg
        transition-transform
        duration-300
        group-hover:scale-105
      "
    />

    {/* Photo Count Badge */}
    <div className="absolute top-3 right-3 bg-black/60 text-white text-xs px-3 py-1 rounded-full flex items-center gap-1">
      <ImageIcon size={14} />
      {album.photos.length}
    </div>
  </div>

  {/* Text Area */}
  <div className="p-5 text-center">
    <h3 className="mb-1">{album.title}</h3>
    <p className="text-sm text-muted-foreground">{album.date}</p>
  </div>
</Link>

))}


        {/* Upload Section */}
        <section className="mt-16 text-center bg-muted rounded-xl p-12">
          <div className="max-w-2xl mx-auto">
            <ImageIcon size={48} className="mx-auto mb-6 text-primary" />
            <h2 className="mb-4">Share Your Photos</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Have photos from family events? Help us preserve our memories by uploading your pictures to share with everyone.
            </p>
            <button className="px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
              Upload Photos
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
