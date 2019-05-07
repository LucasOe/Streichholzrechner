const {app, BrowserWindow} = require('electron')

app.on('ready', function createWindow () {
	let mainWindow = new BrowserWindow({
		//Window Settings
		width: 500,
		height: 800,
		title: app.getName(),
		titleBarStyle: 'hidden',
		backgroundColor: '#23272A',
		resizable: false
	});
	mainWindow.setMenuBarVisibility(false);
	mainWindow.loadFile('index.html');

	mainWindow.on('closed', () => {
		mainWindow = null;
	});
});

app.on('window-all-closed', () => {
  app.quit();
});
