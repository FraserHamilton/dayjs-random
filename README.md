# dayjs-random

This is a plugin for [Day.js](https://github.com/iamkun/dayjs) that allows you to generate random dates using the following methods 

## Getting Started

The following guide will help you use the plugin with Day.js, and explain the plugins API.

### Prerequisites
Day.js version 1.8.x installed

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

```javascript
import dayjs from 'dayjs';
import dayjsRandom from 'dayjs-random';

dayjs.extend(dayjsRandom);
```

### between
**dayjs.between(Date1, Date2)**
Returns a date between Date1 and Date2.
```javascript
dayjs.between("2020-06-24", "2020-12-15").format() // returns 2020-08-15T02:39:43+01:00
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

