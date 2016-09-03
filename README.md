## links

Easily get the links you want, from any page you want.

#### Prerequisites
git, npm, node

---

#### Usage

`node ./lib/links.js`

```shell
[ # ... all links on https://www.google.com ... ]
```

`node ./lib/links.js https://www.amazon.com`

```shell
[ # ... all links on https://www.amazon.com ... ]
```

`node ./lib/links.js https://www.amazon.com -s '#sims-fbt-container a'`

```shell
[ # ... all links on https://www.amazon.com that exist within the DOM element that matches '#sims-fbt-container a' ... ]
```

---

#### Install

```shell
# 1) go to your working directory

# 2) clones the code into a folder called 'amazoncrawler'
git clone git@github.com:albertywu/amazoncrawler.git amazoncrawler

# 3) change directory to that folder
cd amazoncrawler

# 4) installs the code
npm install
```

---

#### Developing & Testing

To develop, run `npm run watch` and edit the files in `/src`. Upon save the compiled .js should appear in `/lib`

To test, run `npm test`.