const {app, BrowserWindow} = require('electron');

app.on('ready', function createWindow () {
	let mainWindow = new BrowserWindow({
		//Window Settings
		width: 408,
		height: 750,
		title: app.getName(),
		titleBarStyle: 'hidden',
		backgroundColor: '#21252b',
		resizable: false
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
