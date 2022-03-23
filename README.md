# daily-random

This package solves a simple issue - you need a consistent random number between 0 and 1 every day. In my case I needed a random seed between 0 and 1 that would work as a seed for a shuffle algorithm. I needed it to be consistent across all users every day and be different the next day.

## Usage

```javascript
const dailyRandom = generateDailyRandomNumber(); // 0.9516682408248016
```
