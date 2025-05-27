const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

let mainWindow;

const createWindow = () => {
  mainWindow = new BrowserWindow({
    width: 1280,
    height: 800,
    backgroundColor: '#121212',
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js')
    }
  });

  // In development, load from Vite dev server
  if (process.env.NODE_ENV === 'development') {
    mainWindow.loadURL('http://localhost:5173');
    mainWindow.webContents.openDevTools();
  } else {
    // In production, load the built files
    mainWindow.loadFile(path.join(__dirname, '../dist/index.html'));
  }

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
};

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});

// IPC Handlers
ipcMain.handle('import-files', async (event, filePaths) => {
  try {
    // TODO: Implement file import logic
    return { success: true, message: 'Files imported successfully' };
  } catch (error) {
    return { success: false, error: error.message };
  }
});

ipcMain.handle('get-tracks', async () => {
  try {
    // TODO: Implement track fetching logic
    return { success: true, tracks: [] };
  } catch (error) {
    return { success: false, error: error.message };
  }
});

ipcMain.handle('update-metadata', async (event, { filePath, metadata }) => {
  try {
    // TODO: Implement metadata update logic
    return { success: true, message: 'Metadata updated successfully' };
  } catch (error) {
    return { success: false, error: error.message };
  }
});
