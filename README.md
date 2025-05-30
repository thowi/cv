# Install dependencies

The CSS depends on `minireset.css`. For PDF preview hot reloading, there is a dependency on `npm-watch`. To install the dependencies, run:

```
npm install
```

# Edit and view

The CSS styling for screens has a similar width as an A4 paper view. So most of the work can be done in a normal web view.

# Export to PDF

Since late 2024, modern browsers have great CSS Paged Media support. You can just use the print preview and save as PDF.

You can also use [Prince](https://www.princexml.com/) for an advanced export. This repo includes an npm script to watch and re-generate the PDF using Prince. Run it like this:

```
npm run watch
```
