---
title : Log Level
category : log
---

프로그램에서 어떠한 이력을 남기는데 있어 그 수준을 정하는 것 

|       |trace|debug|info|warn|error|fatal|
|-------|-----|-----|----|----|-----|-----|
| ALL   |o    |o    |o   |o   |o    |o    |
| TRACE |o    |o    |o   |o   |o    |o    |
| DEBUG |x    |o    |o   |o   |o    |o    |
| INFO  |x    |x    |o   |o   |o    |o    |
| WARN  |x    |x    |x   |o   |o    |o    |
| ERROR |x    |x    |x   |x   |o    |o    |
| FATAL |x    |x    |x   |x   |x    |o    |
| OFF   |x    |x    |x   |x   |x    |x    |
