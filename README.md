# dayjs-random

This is a plugin for [Day.js](https://github.com/iamkun/dayjs) that allows you to generate random datetimes.

- Get a random dayjs instance between two datetimes
- Get a random dayjs instance that's coming up or recently occured
- Get a random dayjs instance that's in the past or future

## Getting Started

The following guide will help you use the plugin with Day.js, and explain the plugins API.

### Prerequisites
Day.js installed

### Installation
You can install via Yarn or npm

```bash
yarn add dayjs-random
```
```bash
npm install dayjs-random
```

## Usage Guide

You will need to import the plugin and activate it via the Day.js `.extend()` function

### ES6
```javascript
import dayjs from 'dayjs'
import dayjsRandom from 'dayjs-random'

dayjs.extend(dayjsRandom)
```

### Node

```javascript
const dayjs = require('dayjs')
const dayjsRandom = require('dayjs-random')

dayjs.extend(dayjsRandom)
```

### between
**dayjs.between(Date1, Date2)**
Returns a date between Date1 and Date2.
```javascript
dayjs.between('2020-06-10', '2030-03-02').format('YYYY-MM-DD') // returns 2026-08-27

dayjs.between('2020-06-10T11:00:00+01:00', '2020-06-10T19:00:00+01:00').format() // returns 2020-06-10T15:52:59+01:00
```

### soon
**dayjs.soon(days, refDate)**
Returns a date sometime between now and N days in the future. If not provided, days will default to 1 and refDate will default to now.
```javascript
dayjs().format() // 2020-06-10T11:00:00+01:00

dayjs.soon().format() // returns 2020-06-11T08:23:04+01:00

```

### recent
**dayjs.recent(days, refDate)**
Returns a date sometime between now and N days ago. If not provided, days will default to 1 and refDate will default to now.
```javascript
dayjs().format() // 2020-06-10T11:00:00+01:00

dayjs.recent().format() // retruns 2020-06-09T22:39:59+01:00
```

### future
**dayjs.future(years, refDate)**
Returns a date sometime between now and N years in the future. If not provided, years will default to 1 and refDate will default to now.
```javascript
dayjs().format() // 2020-06-10T11:00:00+01:00

dayjs.future().format() // returns 2020-07-06T12:41:59+01:00
```

### past
**dayjs.past(years, refDate)**
Returns a date sometime between now and N years ago. If not provided, years will default to 1 and refDate will default to now.
```javascript
dayjs().format() // 2020-06-10T11:00:00+01:00

dayjs.past().format() // returns 2019-09-28T07:29:19+01:00
```

## Local Development and Contributing

We are more than happy to accept PRs for bugs, improvements or new features.
Developing your own changes locally is easy, you just need to clone the repo

```bash
git clone git@github.com/FraserHamilton/dayjs-random

cd dayjs-random
```

and install the dependencies with either `npm` or `yarn`

```bash
npm i
```

```bash
yarn
```

Tests can be ran with the `test` script

```bash
npm run test
```

```bash
yarn test
```

