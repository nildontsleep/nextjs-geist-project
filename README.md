# MuseShelf

A minimalist offline music organizer and player built with Electron, React, and Tailwind CSS.

## Features

- 🎵 Drag and drop music files to import
- 📝 Edit music metadata (title, artist, album, etc.)
- 🎨 Modern, responsive UI with dark mode
- 📚 Organize music library with playlists
- 💾 Offline-first, no internet required
- 🎧 Built-in music player with waveform visualization

## Tech Stack

- Electron - Cross-platform desktop application framework
- React - UI framework
- Vite - Build tool and development server
- Tailwind CSS - Utility-first CSS framework
- music-metadata - Music file metadata parser
- node-id3 - ID3 tag reader/writer
- wavesurfer.js - Audio waveform visualization

## Getting Started

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:8000](http://localhost:8000) in your browser

## Development

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start Electron app
- `npm run lint` - Run ESLint

## Project Structure

```
museshelf/
├── electron/          # Electron main process
├── src/
│   ├── components/    # React components
│   ├── utils/         # Utility functions
│   ├── hooks/         # Custom React hooks
│   ├── App.jsx        # Main React component
│   └── main.jsx       # React entry point
└── public/            # Static assets
```

## License

MIT License
