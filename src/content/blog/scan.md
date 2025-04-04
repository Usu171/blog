---
title: Scan脚本
banner: /img/J.webp
date: 2024-09-24 00:03:05
description: Scan脚本
tags:
  - 计算化学
categories: 计算化学
cover: /img/J.webp
---

[Be2 ORCA molpro.7z](/data/Be2.7z)


需要模板输入文件`t.in`和xyz动画文件`trj.xyz`

`runall.sh`提取能量部分按需更改

### 创建输入文件

```sh
./trj2inp.sh trj.xyz t.in
```

### 运行

```sh
./orcarunall.sh
```
