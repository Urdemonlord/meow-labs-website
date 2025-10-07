# Integrasi Showcase-IT dengan MeowLabs.id

Dokumen ini berisi panduan lengkap untuk mengintegrasikan proyek-proyek dari Showcase-IT ke platform MeowLabs.id.

## Daftar Isi
- [Opsi Integrasi](#opsi-integrasi)
  - [REST API](#rest-api)
  - [Embedded Widget](#embedded-widget)
- [Panduan Implementasi](#panduan-implementasi)
  - [Menggunakan REST API](#menggunakan-rest-api)
  - [Menggunakan Embedded Widget](#menggunakan-embedded-widget)
- [Pengaturan Tampilan](#pengaturan-tampilan)
- [Contoh Kode](#contoh-kode)
- [FAQ](#faq)

## Opsi Integrasi

### REST API

API endpoint publik tersedia untuk mengakses data proyek dari Showcase-IT. Endpoint ini menyediakan data dalam format JSON yang dapat digunakan untuk menampilkan proyek di MeowLabs.id.

**URL Endpoint**: `https://show-case-it-05.vercel.app/api/projects`

**Parameter Query**:
- `limit` (opsional): Jumlah maksimum proyek yang ingin diambil (default: 100)
- `offset` (opsional): Jumlah proyek yang ingin dilewati (untuk pagination)
- `tags` (opsional): Filter proyek berdasarkan tag, dipisahkan dengan koma (contoh: "React,TypeScript,Backend")

**Contoh Response**:
```json
[
  {
    "id": "123e4567-e89b-12d3-a456-426614174000",
    "title": "Portfolio Website",
    "description": "A personal portfolio website built with React and TypeScript",
    "image": "https://example.com/screenshot.png",
    "url": "https://github.com/username/portfolio",
    "repo_stars": 5,
    "tags": ["React", "TypeScript", "Frontend"],
    "ai_summary": "Website portofolio interaktif dengan fitur pemilihan tema dan integrasi blog dinamis",
    "github_url": "https://github.com/username/portfolio",
    "website_url": "https://username-portfolio.vercel.app",
    "key_features": ["Tema Gelap/Terang", "Blog Dinamis", "Animasi Halus"]
  },
  // More projects...
]
```

### Embedded Widget

Widget yang dapat langsung diembed ke halaman MeowLabs.id menggunakan iframe. Widget ini menampilkan proyek-proyek dari Showcase-IT dengan UI yang sudah didesain.

**URL Widget**: `https://show-case-it-05.vercel.app/embed`

**Parameter Query**:
- `limit` (opsional): Jumlah maksimum proyek yang ingin ditampilkan
- `tags` (opsional): Filter proyek berdasarkan tag, dipisahkan dengan koma

## Panduan Implementasi

### Menggunakan REST API

#### 1. Fetch Data dari API

```typescript
// File: pages/showcase.tsx di MeowLabs.id
import { useState, useEffect } from 'react';
import ProjectCard from '../components/ProjectCard';

export default function ShowcasePage() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProjects() {
      try {
        // Gunakan URL Showcase-IT produksi
        const response = await fetch('https://show-case-it-05.vercel.app/api/projects?limit=12');
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchProjects();
  }, []);

  if (loading) {
    return <div>Loading projects...</div>;
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Proyek Mahasiswa</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map(project => (
          <div key={project.id} className="border rounded-lg overflow-hidden shadow-md">
            {project.image && (
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-48 object-cover"
              />
            )}
            <div className="p-4">
              <h3 className="font-bold text-xl mb-2">{project.title}</h3>
              <p className="text-gray-700 mb-2">{project.ai_summary || project.description}</p>
              
              {project.tags && (
                <div className="flex flex-wrap gap-2 mt-3 mb-4">
                  {project.tags.map(tag => (
                    <span 
                      key={tag} 
                      className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
              
              <div className="mt-4 flex gap-2">
                {project.github_url && (
                  <a 
                    href={project.github_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm px-3 py-1 bg-gray-800 text-white rounded"
                  >
                    GitHub
                  </a>
                )}
                {project.website_url && (
                  <a 
                    href={project.website_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm px-3 py-1 bg-blue-600 text-white rounded"
                  >
                    Website
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
```

#### 2. Refresh Data Secara Berkala

Untuk memastikan data proyek selalu up-to-date, tambahkan interval untuk me-refresh data:

```typescript
useEffect(() => {
  // Fetch initial data
  fetchProjects();
  
  // Set up interval to refresh data every 5 minutes
  const intervalId = setInterval(fetchProjects, 5 * 60 * 1000);
  
  // Clean up interval on component unmount
  return () => clearInterval(intervalId);
}, []);
```

### Menggunakan Embedded Widget

#### 1. Tambahkan iframe ke Halaman MeowLabs.id

```html
<!-- Contoh implementasi di halaman HTML statis -->
<div class="container mx-auto py-8">
  <h1 class="text-3xl font-bold mb-6">Proyek Mahasiswa</h1>
  
  <iframe
    src="https://show-case-it-05.vercel.app/embed"
    width="100%"
    height="800px"
    frameborder="0"
    title="Showcase-IT Projects"
    loading="lazy"
    style="border-radius: 8px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);"
  ></iframe>
</div>
```

#### 2. Komunikasi dengan iframe Menggunakan postMessage

```javascript
// Di MeowLabs.id
const showcaseIframe = document.getElementById('showcase-iframe');

// Mengirim filter ke iframe
function filterProjects(tags) {
  showcaseIframe.contentWindow.postMessage({
    type: 'FILTER_TAGS',
    tags: tags
  }, 'https://show-case-it-05.vercel.app');
}

// Tambahkan event listener untuk menerima pesan dari iframe
window.addEventListener('message', (event) => {
  // Pastikan pesan berasal dari domain yang diizinkan
  if (event.origin !== 'https://show-case-it-05.vercel.app') {
    return;
  }
  
  // Handle pesan
  if (event.data.type === 'SHOWCASE_READY') {
    console.log('Showcase widget is ready');
  }
});

// Contoh penggunaan filter
document.getElementById('filter-button').addEventListener('click', () => {
  filterProjects(['React', 'TypeScript']);
});
```

## Pengaturan Tampilan

### Styling Kustom (Hanya untuk REST API)

Saat menggunakan REST API, Anda memiliki kontrol penuh atas bagaimana proyek ditampilkan di MeowLabs.id. Anda dapat menyesuaikan tampilan dengan CSS kustom untuk mencocokkan desain MeowLabs.id.

### Widget Style Override (Untuk Embedded Widget)

Jika menggunakan embedded widget, Anda dapat menambahkan parameter styling tambahan:

```
https://show-case-it-05.vercel.app/embed?theme=dark&accentColor=blue
```

Parameter yang tersedia:
- `theme`: `light` atau `dark` (default: `light`)
- `accentColor`: Warna aksen untuk tombol dan highlight (default: `blue`)

## Contoh Kode

### Implementasi NextJS

```tsx
// pages/showcase.tsx
import { useState, useEffect } from 'react';
import Head from 'next/head';

export default function ShowcasePage() {
  return (
    <>
      <Head>
        <title>Proyek Mahasiswa - MeowLabs.id</title>
      </Head>
      
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-6">Proyek Mahasiswa</h1>
        
        <iframe
          src="https://show-case-it-05.vercel.app/embed"
          width="100%"
          height="800px"
          frameBorder="0"
          title="Showcase-IT Projects"
          loading="lazy"
          className="rounded-lg shadow-md"
        />
      </div>
    </>
  );
}
```

## FAQ

### Berapa sering data diperbarui?

API dan widget mengambil data langsung dari database Showcase-IT, sehingga selalu menampilkan data terbaru. Namun, untuk performa, hasil API di-cache selama 60 detik.

### Apakah saya bisa menampilkan proyek untuk pengguna tertentu saja?

Saat ini API hanya menampilkan proyek publik. Jika Anda ingin menampilkan proyek untuk pengguna tertentu, tambahkan parameter `user_id` ke query API.

### Bagaimana cara menangani error jika API tidak tersedia?

Selalu implementasikan error handling dan fallback UI untuk menangani situasi ketika API tidak tersedia atau mengembalikan error.

### Bagaimana dengan keamanan?

API endpoint hanya menyediakan data publik dan dilindungi oleh Rate Limiting untuk mencegah penyalahgunaan. Untuk kebutuhan akses lebih lanjut, hubungi administrator Showcase-IT.

---

Untuk pertanyaan lebih lanjut atau dukungan teknis, silakan hubungi support@showcase-it.com