import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { FamilyTreePage } from './pages/FamilyTreePage';
import { EventsPage } from './pages/EventsPage';
import { GalleryPage } from './pages/GalleryPage';
import { StoriesPage } from './pages/StoriesPage';
import { NewsPage } from './pages/NewsPage';
import { DirectoryPage } from './pages/DirectoryPage';
import {AlbumPage} from './pages/AlbumPage';

function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-8 px-4 mt-auto">
      <div className="max-w-7xl mx-auto text-center">
        <p className="mb-2">Ramalan Descendant Family</p>
        <p className="text-sm opacity-80">Preserving our heritage, celebrating our unity</p>
        <p className="text-sm opacity-60 mt-4">© 2025 Ramalan Family. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Navigation />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/family-tree" element={<FamilyTreePage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/stories" element={<StoriesPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/directory" element={<DirectoryPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/gallery/:albumId" element={<AlbumPage />} />

          
            
            
          
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
