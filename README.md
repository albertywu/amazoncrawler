## links

Easily get the links you want, from any page you want. Uses standard JQuery selectors to select links.

---

#### Usage

1) Get all links on https://www.google.com

`node ./lib/links.js`

2) Get all links on https://www.amazon.com

`node ./lib/links.js https://www.amazon.com`

3) Get all links on https://www.amazon.com within the [JQuery selector](http://www.w3schools.com/jquery/jquery_ref_selectors.asp) '#sims-fbt-container a'

`node ./lib/links.js https://www.amazon.com -s '#sims-fbt-container a'`

---

#### Install

Prerequisites: **git**, **npm**, **node**

```shell
# 1) clones the code into a folder called 'links'
git clone git@github.com:albertywu/links.git links

# 2) change directory to that folder
cd links

# 3) installs the code
npm install
npm run build
```

---

#### Developing & Testing

To develop, run `npm run watch` and edit the files in `/src`. Upon save the compiled .js should appear in `/lib`

To test, run `npm test`.