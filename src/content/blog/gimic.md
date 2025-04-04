---
title: GIMIC state file
banner: /img/gimic/2.webp
date: 2023-05-10 15:49:54
description: ParaView state file for GIMIC
tags: 
  - 计算化学
categories: 计算化学
cover: /img/gimic/1.webp
---
根据 [考察分子磁感生电流的程序GIMIC 2.0的使用](http://sobereva.com/491) 制作了ParaView的state file
<!--more-->
1.gjf为闭壳层输入文件, 2.gjf为开壳层, .sh为对应脚本

[GitHub链接](https://github.com/Usu171/GIMIC)

## 效果展示

### 绘制感生电流的模的等值面

1_Isosurfaces.pvsm

![](/img/gimic/11.webp)

### 绘制感生电流的模的截面着色图

3_2_Section.pvsm
![](/img/gimic/3.webp)

### 绘制ACID等值面图+向量场图

4_ACID_Isosurfaces_Vectors.pvsm
![](/img/gimic/41.webp)

### 绘制感生电流三维流线图  

5_Line.pvsm
![](/img/gimic/5.webp)
5_Line_Vectors.pvsm
![](/img/gimic/52.webp)

### 绘制感生电流的模的平面着色流线图+箭头图

 6_LIC.pvsm
![](/img/gimic/6.webp)

### 绘制全空间动态流线场图

7_Stream_Line.pvsm
![](/img/gimic/7.webp)

![](/img/gimic/1.webp)

## 使用方法

1. File - Load State...
2. 打开pvsm文件后选择Search files under specified directory, 确认Data Directory是否包含GIMIC输出文件
![](/img/gimic/22.webp)

3. 如果原子显示为黄色请点击mol-bohr.cml
![](/img/gimic/23.webp)

1. 完成!

### 使用相关软件请遵守其使用条款