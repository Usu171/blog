---
title: 类氢原子Dirac轨道可视化
banner: /img/dirac/dirac_f.webp
date: 2025-05-24 13:45:20
description: Dirac/Schrodinger轨道可视化
tags:
  - 量子力学
categories: 量子力学
cover: /img/dirac/1.webp
---

实现了类氢原子 Dirac/Schrodinger 轨道（包括杂化轨道）的各种可视化方法（3D等值面、平面图、蒙特卡罗...）

[GitHub](https://github.com/Usu171/HlikeOrbs) 使用方法请参考example

![Hydrogenic Orbitals Visualized](/img/dirac/1.webp)



![Dirac Orbitals 1s~4f](/img/dirac/dirac_f.webp)
Dirac 轨道 1s2p3d4f 概率密度$\psi_1$, $\psi_2$ (上)，概率流密度$\psi_3$, $\psi_4$ (下)，k: -4（下）到3（上） m: -7/2（左）到7/2 （右） 不含0  
等值面是 0.1×最大值，所有图都是缩放过的，不能直接比较等值面大小

![Dirac Orbitals 1s~6h](/img/dirac/dirac_h.png)
1s-6h k: -6 - 5 m: -11/2 - 11/2


参考公式：

[Hydrogen-like atom - Wikipedia](https://en.wikipedia.org/wiki/Hydrogen-like_atom)
[如何直观地理解原子轨道的四个量子数、波函数及其电子云的分布图？ - 雪齋的回答 - 知乎](https://www.zhihu.com/question/38795684/answer/127476871838)
[Solara570/temp](https://github.com/Solara570/temp/blob/main/orbital_plot/orbital-plot.pdf)
