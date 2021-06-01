**qa-saucedemo-aut-test**

Automation testing in saucedemo.com. Runs only in firefox.

---

## Installation

* npm
* webdriverIo

---

## Running 

1. Open a console and run:
```bash
./geckodriver
// or
./geckodriver --binary {PATH firefox.exe}
```
2. Open another console and run:
```bash
npm run test
```
3. If any of this works, uncommented chrome in *wdio.conf.js*:
```bash
{
maxInstances: 5,
browserName: 'chrome'
acceptInsecureCerts: true
}

services: ['chromedriver'],
```

And commented firefox.
```bash
{
browserName: 'firefox',
acceptInsecureCerts: true
}

services: [
        ['firefox-profile', {
            extensions: [
                '/path/to/extensionA.xpi', // path to .xpi file
                '/path/to/extensionB' // or path to unpacked Firefox extension
            ],
            'xpinstall.signatures.required': false,
            'browser.startup.homepage': 'https://webdriver.io',
            legacy: true // only use for firefox <= 55
        }]
    ],
```
4. Add chromedriver to *package.json*:
```bash
"chromedriver": "^90.0.0",
"wdio-chromedriver-service": "^7.0.0"
```
5. Open a console and run:
```bash
npm run test
```

---

## Developer

Eugenia Rossanigo
