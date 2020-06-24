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
dayjs().format() // 2020-06-24T16:44:35+01:00

dayjs.soon().format() // returns 2020-06-25T05:01:21+01:00
```

### recent
**dayjs.recent(days, refDate)**
Returns a date sometime between now and N days ago. If not provided, days will default to 1 and refDate will default to now.
```javascript
dayjs().format() // 2020-06-24T16:47:39+01:00

dayjs.soon().format() // returns 2020-06-23T21:27:07+01:00
```


