## Amazon product link crawler

#### Prerequisites
git, npm, node

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

#### Try it on an Amazon product URL!

`node ./lib/crawl.js https://www.amazon.com/DHT-Electronics-coaxial-female-connector/dp/B00C20FV78/`

returns:

```javascript
[
  'https://www.amazon.com/DHT-Electronics-coaxial-cable-assembly/dp/B00CP1129K/ref=pd_sim_147_1/164-6582749-0175061?ie=UTF8&psc=1&refRID=MV50KW3HAND22PN1WFCW',
  'https://www.amazon.com/DHT-Electronics-coaxial-cable-assembly/product-reviews/B00CP1129K/ref=pd_sim_147_cr_1/164-6582749-0175061?ie=UTF8&refRID=MV50KW3HAND22PN1WFCW',
  'https://www.amazon.com/DHT-Electronics-coaxial-cable-assembly/product-reviews/B00CP1129K/ref=pd_sim_147_cr_1/164-6582749-0175061?ie=UTF8&refRID=MV50KW3HAND22PN1WFCW',
  'https://www.amazon.com/NooElec-NESDR-Mini-Compatible-Packages/dp/B009U7WZCA/ref=pd_sim_147_2/164-6582749-0175061?ie=UTF8&psc=1&refRID=MV50KW3HAND22PN1WFCW',
  'https://www.amazon.com/NooElec-NESDR-Mini-Compatible-Packages/product-reviews/B009U7WZCA/ref=pd_sim_147_cr_2/164-6582749-0175061?ie=UTF8&refRID=MV50KW3HAND22PN1WFCW',
  'https://www.amazon.com/NooElec-NESDR-Mini-Compatible-Packages/product-reviews/B009U7WZCA/ref=pd_sim_147_cr_2/164-6582749-0175061?ie=UTF8&refRID=MV50KW3HAND22PN1WFCW',
  'https://www.amazon.com/DHT-Electronics-coaxial-assembly-female/dp/B00CSCTU40/ref=pd_sim_147_3/164-6582749-0175061?ie=UTF8&psc=1&refRID=MV50KW3HAND22PN1WFCW',
  'https://www.amazon.com/DHT-Electronics-coaxial-assembly-female/product-reviews/B00CSCTU40/ref=pd_sim_147_cr_3/164-6582749-0175061?ie=UTF8&refRID=MV50KW3HAND22PN1WFCW',
  'https://www.amazon.com/DHT-Electronics-coaxial-assembly-female/product-reviews/B00CSCTU40/ref=pd_sim_147_cr_3/164-6582749-0175061?ie=UTF8&refRID=MV50KW3HAND22PN1WFCW',
  'https://www.amazon.com/NooElec-NESDR-Mini-RTL2832-Antenna/dp/B00P2UOU72/ref=pd_sim_147_4/164-6582749-0175061?ie=UTF8&psc=1&refRID=MV50KW3HAND22PN1WFCW',
  'https://www.amazon.com/NooElec-NESDR-Mini-RTL2832-Antenna/product-reviews/B00P2UOU72/ref=pd_sim_147_cr_4/164-6582749-0175061?ie=UTF8&refRID=MV50KW3HAND22PN1WFCW',
  'https://www.amazon.com/NooElec-NESDR-Mini-RTL2832-Antenna/product-reviews/B00P2UOU72/ref=pd_sim_147_cr_4/164-6582749-0175061?ie=UTF8&refRID=MV50KW3HAND22PN1WFCW',
  'https://www.amazon.com/NooElec-Ham-Up-v1-3-Upconverter/dp/B009LQT3G6/ref=pd_sim_147_5/164-6582749-0175061?ie=UTF8&psc=1&refRID=MV50KW3HAND22PN1WFCW',
  'https://www.amazon.com/NooElec-Ham-Up-v1-3-Upconverter/product-reviews/B009LQT3G6/ref=pd_sim_147_cr_5/164-6582749-0175061?ie=UTF8&refRID=MV50KW3HAND22PN1WFCW',
  'https://www.amazon.com/NooElec-Ham-Up-v1-3-Upconverter/product-reviews/B009LQT3G6/ref=pd_sim_147_cr_5/164-6582749-0175061?ie=UTF8&refRID=MV50KW3HAND22PN1WFCW',
  'https://www.amazon.com/NooElec-NESDR-Mini-Receiver-RTL2832U/dp/B00VZ1AWQA/ref=pd_sim_147_6/164-6582749-0175061?ie=UTF8&psc=1&refRID=MV50KW3HAND22PN1WFCW',
  'https://www.amazon.com/NooElec-NESDR-Mini-Receiver-RTL2832U/product-reviews/B00VZ1AWQA/ref=pd_sim_147_cr_6/164-6582749-0175061?ie=UTF8&refRID=MV50KW3HAND22PN1WFCW',
  'https://www.amazon.com/NooElec-NESDR-Mini-Receiver-RTL2832U/product-reviews/B00VZ1AWQA/ref=pd_sim_147_cr_6/164-6582749-0175061?ie=UTF8&refRID=MV50KW3HAND22PN1WFCW'
]
```