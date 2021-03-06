const {app, BrowserWindow} = require('electron');

app.on('ready', function createWindow () {
	let mainWindow = new BrowserWindow({
		//Window Settings
		width: 450,
		height: 750,
		title: app.getName(),
		titleBarStyle: 'hidden',
		backgroundColor: '#21252b',
		resizable: true,
		minWidth: 450,
		maxWidth: 450,
		minHeight: 250,
		webPreferences: {
			nodeIntegration: true,
			devTools: true
		}
	});
	mainWindow.setMenuBarVisibility(false);
	mainWindow.loadFile('./app/index.html');

	mainWindow.on('closed', () => {
		mainWindow = null;
	});
});

app.on('window-all-closed', () => {
	app.quit();
});
