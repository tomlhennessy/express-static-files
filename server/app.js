const express = require('express');
const app = express();

// part 1: serve all files in the `assets`folder
// app.use(express.static('server/assets'));

// part 2: serve only files in the `assets/scripts` folder at the root URL
// app.use(express.static('server/assets/scripts'));

// part 3: serve files in the `assets/css` folder under a `stylesheets` route
// app.use('/stylesheets', express.static('server/assets/css'))

// bonus: serve files in `assets/images` folder under a `stickers` route
app.use('/stickers', express.static('server/assets/images'));

const port = 5000;
app.listen(port, () => console.log('Server is listening on port', port));
