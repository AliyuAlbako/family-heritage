import { useParams, Link } from "react-router-dom";

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


const albumData = {
  "family-reunion-2025": {
    title: "Family Reunion 2025",
    photos: [img1, img2, img3, img4],
  },
  "walimah-ahmad-siti": {
    title: "Walimah - Ahmad & Siti",
    photos: [img5, img6, img7, img8 ],
  },
  "wedding-walimah": {
    title: "wedding-walimah",
    photos: [img9, img10, img11, img12 ],
  },
  "Danmaliki Jnr's Walimah": {
    title: "Danmaliki Jnr's Walimah",
    photos: [img13, img14, img15, img16 ],
  },
  "Eid Walimah": {
    title: "Eid Walimah",
    photos: [img17, img18, img19, img20 ],
  },
};

export function AlbumPage() {
  const { albumId } = useParams();
  const album = albumData[albumId as keyof typeof albumData];

  if (!album) {
    return <p className="text-center mt-20">Album not found</p>;
  }

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <Link to="/gallery" className="text-primary mb-6 inline-block">
          ← Back to Gallery
        </Link>

        <h1 className="mb-8">{album.title}</h1>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {album.photos.map((photo, index) => (
            <img
              key={index}
              src={photo}
              alt=""
              className="w-full h-60 object-cover rounded-lg hover:scale-105 transition-transform"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
