const { contextBridge, ipcRenderer } = require('electron');

// Expose protected methods that allow the renderer process to use
// the ipcRenderer without exposing the entire object
contextBridge.exposeInMainWorld(
  'electronAPI', {
    importFiles: (filePaths) => ipcRenderer.invoke('import-files', filePaths),
    getTracks: () => ipcRenderer.invoke('get-tracks'),
    updateMetadata: (filePath, metadata) => 
      ipcRenderer.invoke('update-metadata', { filePath, metadata }),
    removeTrack: (trackId) => ipcRenderer.invoke('remove-track', trackId),
    onPlaybackStateChange: (callback) => 
      ipcRenderer.on('playback-state-change', callback),
    onTrackUpdate: (callback) => 
      ipcRenderer.on('track-update', callback)
  }
);

// Cleanup function to remove listeners
window.addEventListener('unload', () => {
  ipcRenderer.removeAllListeners('playback-state-change');
  ipcRenderer.removeAllListeners('track-update');
});
