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
  const summaryHtml = req.query.summary
      ? '<p>' + req.query.summary.split('\n').join('</p>\n<p>') + '</p>'
      : null;
  res.render('cv', {
    title: req.query.title,
    summaryHtml: summaryHtml,
    variant: req.query.variant ?? 'polaroid',
    showPrimarySkillsInExp: req.query.showPrimarySkillsInExp || false,
    showSecondarySkillsInExp: req.query.showSecondarySkillsInExp || false,
    showCommunitySection: req.query.showCommunitySection || false,
    showPersonalSection: req.query.showPersonalSection || false,
  });
});

app.get('/cv_form', (req, res) => {
  res.render('cv_form');
});

// Start server.
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
