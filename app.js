const express = require('express');
const nunjucks = require('nunjucks');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Set up Nunjucks.
nunjucks.configure('views', {
  autoescape: true,
  express: app,
  noCache: true,  // Set to false in production.
});
app.set('view engine', 'njk');

// Serve static files.
app.use(express.static(path.join(__dirname, 'static')));

// Routes.
app.get('/cv', (req, res) => {
  res.render('cv', {
    isVariantPolaroid: true,
    variant: 'polaroid'
  });
});

// Start server.
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
