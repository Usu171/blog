---
title: ICSS平面图、磁感应电流图
banner: /img/icss/ben.webp
date: 2023-09-02 22:50:46
description: ICSS AICD
tags:
  - 计算化学
  - 芳香性
categories: 计算化学
cover: /img/icss/f.webp
---

# ICSS平面图、磁感应电流图

分子平面上方1Å处ICSS_ZZ平面图(正值屏蔽，负值去屏蔽，与NICS相反)

ICSS Low quality grid或NICS 100*100

AICD 仅使用π轨道，参数默认

### 名称

为方便表示，使用一种奇怪的命名方式,例如:

565 表示五元环并六元环并五元环

3=5 表示三元环和五元环通过双键相连

### 计算级别

预优化(xTB): GFN2-xTB

opt,freq(ORCA): B3LYP-D3(BJ)/def2-TZVP,def2-SVP

NICS/ICSS(Gaussian): B3LYP/6-31+G*,6-31+G(d)

AICD(Gaussian): B3LYP/6-31G(d)

GIMIC(Gaussian): B3LYP/6-311G*

### 使用软件

[Marvin](https://chemaxon.com/marvin)(绘制分子) [xTB](https://xtb-docs.readthedocs.io/en/latest/index.html) [ORCA](https://orcaforum.kofo.mpg.de/app.php/portal) [Multiwfn](http://sobereva.com/multiwfn/) [AICD](https://doi.org/10.1021/cr0300901) [GIMIC](https://gimic.readthedocs.io/en/latest/) [VSCode](https://code.visualstudio.com/)

### 参考

[使用AICD 2.0绘制磁感应电流图 - 思想家公社的门口：量子化学·分子模拟·二次元](http://sobereva.com/294)

[使用AICD程序研究电子离域性和磁感应电流密度 - 思想家公社的门口：量子化学·分子模拟·二次元](http://sobereva.com/147)

[通过Multiwfn绘制等化学屏蔽表面(ICSS)研究芳香性 - 思想家公社的门口：量子化学·分子模拟·二次元](http://sobereva.com/216)

[使用Multiwfn巨方便地绘制二维NICS平面图考察芳香性 - 思想家公社的门口：量子化学·分子模拟·二次元](http://sobereva.com/682)

[考察分子磁感生电流的程序GIMIC 2.0的使用（含24分钟演示视频） - 思想家公社的门口：量子化学·分子模拟·二次元](http://sobereva.com/491)

### 建议阅读

[衡量芳香性的方法以及在Multiwfn中的计算 - 思想家公社的门口：量子化学·分子模拟·二次元](http://sobereva.com/176)

[Aromaticity, π-electron delocalization, and ring currents](https://doi.org/10.1351/pac200779060969)

[Patterns of Ring Currents in Conjugated Molecules:  A Few-Electron Model Based on Orbital Contributions](https://doi.org/10.1021/jp011955m)

[Ring currents](https://doi.org/10.1016/S0079-6565(99)00021-7)

### 其他体系

[一个芳香性反直觉的体系：1,4-二氢吡啶 - 超理论坛](https://chaoli.club/index.php/5053)

[[求助]一个诡异的物质的芳香性的问题 - 超理论坛](https://chaoli.club/index.php/6185)

## 苯

![](/img/icss/cycl6.webp)
![](/img/icss/62.webp)
![](/img/icss/cycl6a.webp)

### 苯环中心的顺磁环电流

蓝色为抗磁环电流，红色为顺磁环电流，0.05等值面
![](/img/icss/6g.webp)
![](/img/icss/6g1.webp)

## 苯 - 三重态

![](/img/icss/6_3.webp)
![](/img/icss/6_3a.webp)

## 环丁二烯

![](/img/icss/cycl4.webp)
![](/img/icss/cycl4l.webp)
![](/img/icss/cycl4a.webp)

## 环丁二烯 - 三重态

![](/img/icss/cycl4-3.webp)
![](/img/icss/cycl4-3i2.webp)
![](/img/icss/cycl4-3a.webp)

### 环中心的去屏蔽空洞

![](/img/icss/cycl4-3i.webp)
分子所在平面的ICSS平面图(0Å)
![](/img/icss/cycl4-3_0.webp)
导致环中心去屏蔽的轨道:
![](/img/icss/cycl4-3orb.webp)
两个轨道的顺磁环电流:
![](/img/icss/cycl4-3s.webp)
AICD全部轨道
![](/img/icss/4a.webp)

# 杂环

## 环氧乙烯

???
![](/img/icss/C2H2O.webp)
![](/img/icss/C2H2Oa.webp)

## 环戊二烯负离子

因为都是五元环所以放在这了
![](/img/icss/cycl5.webp)
![](/img/icss/cycl51.webp)
![](/img/icss/cycl5a.webp)

## 吡咯

![](/img/icss/5N.webp)
![](/img/icss/5N2.webp)
![](/img/icss/5Na.webp)

## 呋喃

![](/img/icss/5O.webp)
![](/img/icss/5O2.webp)
![](/img/icss/5Oa.webp)

## 呋喃+H

![](/img/icss/cycl5OH.webp)
![](/img/icss/cycl5OHa.webp)

## 噻吩

![](/img/icss/5S.webp)
![](/img/icss/5S2.webp)
![](/img/icss/5Sa.webp)

## 硒吩

![](/img/icss/5Se.webp)
![](/img/icss/5Se1.webp)
![](/img/icss/5Se2.webp)
![](/img/icss/5Sea.webp)

## 碲吩

基组换成了def2-SVP
![](/img/icss/5Te.webp)
![](/img/icss/5Te1.webp)
![](/img/icss/5Te2.webp)
![](/img/icss/5Tea.webp)

## 吡啶

![](/img/icss/6N.webp)
![](/img/icss/6N2.webp)
![](/img/icss/6Na.webp)

## 吡喃正离子

![](/img/icss/6O+.webp)
![](/img/icss/6O+2.webp)
![](/img/icss/6O+a.webp)

## α-吡喃酮及质子化产物

![](/img/icss/a.webp)
![](/img/icss/AICD3.webp)
![](/img/icss/ah.webp)
![](/img/icss/AICD4.webp)

## γ-吡喃酮及质子化产物

![](/img/icss/y.webp)
![](/img/icss/ya.webp)
![](/img/icss/yh.webp)
![](/img/icss/yha.webp)

## 香豆素及质子化产物

![](/img/icss/X.webp)
![](/img/icss/AICD.webp)
![](/img/icss/XH.webp)
![](/img/icss/AICD2.webp)

## Indolizine 中氮茚

opt,freq: ωB97X-D4/def2-TZVP
![](/img/icss/Indolizine.webp)
![](/img/icss/Indolizinea.webp)

## Cycl[2.2.3]azine

opt,freq: ωB97X-D4/def2-SVP
![](/img/icss/Cycl2.2.3azine.webp)
![](/img/icss/Cycl2.2.3azinea.webp)

## Pyrido[2,1,6-de]quinolizine

![](/img/icss/Pyrido.webp)
![](/img/icss/Pyrido_a.webp)

## 三聚氰酸 C3N3O3H3

![](/img/icss/C3N3O3H3.webp)
![](/img/icss/C3N3O3H3_1.webp)
后者能量更低

## 2-羟基吡啶

![](/img/icss/PyOH.webp)
![](/img/icss/PyOH1.webp)

## 2-吡啶酮

![](/img/icss/PyO.webp)

# 酮

## 环丙烯酮 3=O

![](/img/icss/cycl3=O.webp)
![](/img/icss/cycl3=Oa.webp)

## 3=OH+

![](/img/icss/cycl3=OH.webp)
![](/img/icss/cycl3=OHa.webp)

## H2CO

![](/img/icss/H2CO.webp)


## 环庚三烯酮 7=O

![](/img/icss/cycl7=O.webp)
`
# 两个环相连

## 7=5

五元环与七元环相连
opt,freq: r2SCAN-3c
![](/img/icss/cycl7=cycl5.webp)
![](/img/icss/cycl7=cycl52.webp)
![](/img/icss/cycl7=cycl5a.webp)

## 5=(3/CF2/CH2)

五元环与三元环/CF2/CH2相连
![](/img/icss/cycl5=cycl3.webp)
![](/img/icss/cycl5=cf2.webp)
![](/img/icss/cycl5=ch2.webp)

## 5=5

![](/img/icss/5=5.webp)

## 7=CH2

![](/img/icss/7=.webp)
![](/img/icss/7=1.webp)

## 3=CH2

![](/img/icss/3=CH2.webp)

# 纯碳氢环

## 环丙烯正离子

![](/img/icss/3+.webp)

## 环辛四烯二负离子

![](/img/icss/8_2-.webp)
![](/img/icss/8_2-a.webp)

## 环辛四烯 三重态

![](/img/icss/cyc8_m3.webp)

## 44

![](/img/icss/44.webp)
![](/img/icss/44a.webp)

### 类似环丁二烯的四元环中心去屏蔽
![](/img/icss/44d.webp)

## 55

![](/img/icss/cyc55.webp)

## 64 - 苯并环丁二烯

![](/img/icss/64.webp)
![](/img/icss/642.webp)
![](/img/icss/64a.webp)

## 646 - Biphenylene

![](/img/icss/cycl646.webp)
![](/img/icss/cycl6462.webp)
![](/img/icss/cycl646a.webp)

## 6(46)3

![](/img/icss/cycl6(46)3.webp)
![](/img/icss/cycl6(46)32.webp)
![](/img/icss/cycl6(46)3a.webp)

## 75
![](/img/icss/75.webp)
![](/img/icss/751.webp)
![](/img/icss/75a.webp)

## 84 - Bicyclo(6.2.0)decapentaene

![](/img/icss/84.webp)
![](/img/icss/842.webp)
![](/img/icss/84a.webp)

## 363

![](/img/icss/363.webp)
![](/img/icss/3632.webp)
![](/img/icss/363a.webp)

## 666 - 蒽

![](/img/icss/666.webp)
![](/img/icss/666a.webp)

## 6(8)6 - Cyclohepta[de]naphthalene

![](/img/icss/686.webp)
![](/img/icss/686a.webp)


## 565 - s-Indacene

优化过程中$D_{2h}$变为$C_{2h}$  
单重态能量低于三重态
![](/img/icss/565.webp)
![](/img/icss/565l.webp)
![](/img/icss/cyc565a.webp)
相关文献:  
[s-Indacene, a quasi-delocalized molecule with mixed aromatic and anti-aromatic character](https://doi.org/10.1016/S0166-1280(98)00421-7)

## 565 另一种 - As-Indacene

![](/img/icss/565-2a.webp)

## Acenaphthylene 苊烯

![](/img/icss/Acenaphthylene.webp)
![](/img/icss/Acenaphthylenea.webp)

## 545

![](/img/icss/545.webp)
![](/img/icss/545a.webp)
相关文献:  
[Synthetic and Theoretical Studies of Cyclobuta[1,2:3,4]dicyclopentene. Organocobalt Intermediates in the Construction of the Unsaturated Carbon Skeleton and Their Transformation into Novel Cobaltacyclic Complexes by C−C Insertion](https://doi.org/10.1021/jo030368p)

## Phenalene 但是少一个H的二重态自由基

AICD为全部轨道  
![](/img/icss/cycl6_3.webp)

## Phenalene并三个环

opt,freq: ωB97X-D4/def2-SVP  
单重态$C_{s}$，三重态$D_{3h}$  
三重态能量更低
![](/img/icss/C22.webp)

# 其他

## 环戊二烯

![](/img/icss/5H.webp)

## 环戊二烯两个H换成F

![](/img/icss/5F_1.webp)
![](/img/icss/5F.webp)

## 环戊二烯两个H换成SiH3

![](/img/icss/5Si_1.webp)
![](/img/icss/5Si.webp)

## 方酸

![](/img/icss/C4O4H2.webp)

## C4O4H4_2+

![](/img/icss/C4O4H4_2+.webp)

## C4O4_2-

![](/img/icss/C4O4_2-.webp)

## C4O4

![](/img/icss/C4O4.webp)

## 苯酚

![](/img/icss/PhOH.webp)
![](/img/icss/PhOH1.webp)

## 苯酚负离子

![](/img/icss/PhO.webp)

## 硝基苯

![](/img/icss/PhNO2.webp)

# 非平面

## cis,cis,cis-10-Azatriquinacene

大本上的奇怪习题  
AICD为全部轨道
![](/img/icss/ns.webp)
![](/img/icss/n.webp)
![](/img/icss/na.webp)

# 无机

## Borazine 无机苯

![](/img/icss/B3N3H6.webp)
![](/img/icss/B3N3H6a.webp)
![](/img/icss/B3N3H6g.webp)

## C2B2N2H6
![](/img/icss/C2B2N2H6.webp)
⚠️RHF不稳定  
B3LYP/def2-TZVP RKS稳定 $C_{2h}$

并非能量最低异构  
相关文献:  
[Dehydrogenation Reactions of Cyclic C2B2N2H12 and C4BNH12 Isomers](https://doi.org/10.1021/jp9102838)

## $N_{6}$

![](/img/icss/N6.webp)
![](/img/icss/N6a.webp)
⚠️非势能面极小点  
相关文献:  
[叠氮是拟卤素，那么叠氮离子存在双聚分子(N3)2吗？ - Radical H的回答 - 知乎](https://www.zhihu.com/question/605437773/answer/3489638784)

## $N_{6}^{4-}$

![](/img/icss/N6_4-.webp)
![](/img/icss/N6_4-a.webp)
