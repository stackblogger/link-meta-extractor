![GitHub Workflow Status (branch)](https://img.shields.io/github/actions/workflow/status/stackblogger/link-meta-extractor/master.yml?style=flat-square&logo=github&color=success)
![npm](https://img.shields.io/npm/v/link-meta-extractor?style=flat-square&color=success&logo=npm)

# link-meta-extractor

Extract metadata information from any http/https url. Simply pass a url string to the function and wait for the metadata results. You can run the code with async/await or use a callback to get results.

<br>

### Installation

```bash
npm install link-meta-extractor
```

### TypeScript Usage

#### Work with async/await

If you want to extract metadata information from a website using async/await then go with following code...

```typescript
import { extractMetadata } from 'link-meta-extractor';

async function extractMeta() {
  const url = 'https://stackblogger.com';
  const metaInformation = await extractMetadata(url);

  console.log(metaInformation);
}

extractMeta();

/*
    {
        title: 'StackBlogger - A blog by programmer for programmers',
        description: 'StackBlogger provide programming Tutorials, Tips, Tricks and HowTo Guides.',
        banner: 'https://stackblogger.com/wp-content/uploads/2021/10/Untitled-7-1.png',
        isItWordpress: true,
        wordpressVersion: 'WordPress 5.8.1'
    }
*/
```

#### Work with promise/callback

If you want to extract metadata information from a website using callback method then go with following code...

```typescript
import { extractMetadata } from 'link-meta-extractor';

function extractMeta() {
  const url = 'https://stackblogger.com';
  extractMetadata(url).then((metaInformation) => {
    console.log(metaInformation);
  });
}

extractMeta();

/*
    {
        title: 'StackBlogger - A blog by programmer for programmers',
        description: 'StackBlogger provide programming Tutorials, Tips, Tricks and HowTo Guides.',
        banner: 'https://stackblogger.com/wp-content/uploads/2021/10/Untitled-7-1.png',
        isItWordpress: true,
        wordpressVersion: 'WordPress 5.8.1'
    }
*/
```

### JavaScript Usage

Use the following code to extract metadata information from an url in JavaScript code

#### Work with async/await

If you want to extract metadata information from a website using async/await then go with following code...

```javascript
const metaExtractor = require('link-meta-extractor');

async function extractMeta() {
  const url = 'https://stackblogger.com';
  const metaInformation = await metaExtractor.extractMetadata(url);
  console.log(metaInformation);
}

extractMeta();

/*
    {
        title: 'StackBlogger - A blog by programmer for programmers',
        description: 'StackBlogger provide programming Tutorials, Tips, Tricks and HowTo Guides.',
        banner: 'https://stackblogger.com/wp-content/uploads/2021/10/Untitled-7-1.png',
        isItWordpress: true,
        wordpressVersion: 'WordPress 5.8.1'
    }
*/
```

#### Work with promise/callback

If you want to extract metadata information from a website using callback method then go with following code...

```javascript
const metaExtractor = require('link-meta-extractor');

function extractMeta() {
  const url = 'https://stackblogger.com';
  metaExtractor.extractMetadata(url).then((metaInformation) => {
    console.log(metaInformation);
  });
}

extractMeta();

/*
    {
        title: 'StackBlogger - A blog by programmer for programmers',
        description: 'StackBlogger provide programming Tutorials, Tips, Tricks and HowTo Guides.',
        banner: 'https://stackblogger.com/wp-content/uploads/2021/10/Untitled-7-1.png',
        isItWordpress: true,
        wordpressVersion: 'WordPress 5.8.1'
    }
*/
```

<br>

### Additional Fields Extraction

The plugin accepts additional fields as optional argument that you can use to extract from a website.

Pass the meta field keys in string format as a rest parameter in function. Refer the code here...

```typescript
import { extractMetadata } from 'link-meta-extractor';

async function extractMeta() {
  const url = 'https://stackblogger.com';
  const metaInformation = await extractMetadata(
    url,
    'og:site_name', // additional field
    'og:image', // additional field
    'robots' // additional field
  );

  console.log(metaInformation);
}

extractMeta();

/* 
    {
        title: 'StackBlogger - A blog by programmer for programmers',
        description: 'StackBlogger provide programming Tutorials, Tips, Tricks and HowTo Guides.',
        banner: 'https://stackblogger.com/wp-content/uploads/2021/10/Untitled-7-1.png',
        isItWordpress: true,
        wordpressVersion: 'WordPress 5.8.1',
        additional: {
            siteName: 'StackBlogger',
            image: 'https://stackblogger.com/wp-content/uploads/2021/10/Untitled-7-1.png',
            robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
        }
    }
*/
```

### License

[MIT](https://choosealicense.com/licenses/mit/)
