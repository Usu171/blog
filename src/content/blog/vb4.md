---
title: VB(4)-NO3-,H2CO3
banner: /img/VB/no6.webp
date: 2024-09-05 17:32:34
description: VB(4)-NO3-,H2CO3
tags:
  - XMVB
  - 价键理论
categories: 价键理论
cover: /img/VB/no6.webp
---

# NO3-
[轨道/输入/输出文件下载](/data/NO3-.7z)

σ依旧保持离域，只考虑π
添加电荷`NCHARGE=-1`
```
NO3
$CTRL
nstr=3 NAO=4 NAE=6 ISCF=5 IPRINT=3
ORBTYP=HAO FRGTYP=SAO
INT=LIBCINT BASIS=6-31g* NCHARGE=-1
guess=auto
$END
$FRAG
4 1*4
spxpydxxdyydzzdxy 1-4
pzdxzdyz 1
pzdxzdyz 2
pzdxzdyz 3
pzdxzdyz 4
$orb
1*13 1*4
1
1
1
1
1
1
1
1
1
1
1
1
1

2
3
4
5
$END
$str
1:13 14 15 16 16 17 17
1:13 14 16 15 15 17 17
1:13 14 17 15 15 16 16
$end
$GEO
 N                  0.00000000    0.00000000   -0.00000000
 O                  0.00000000    1.24917097    0.00000000
 O                 -1.08181379   -0.62458548    0.00000000
 O                  1.08181379   -0.62458548    0.00000000
$END
```

这里先算了只有3个经典结构情况，之后`guess=read`读取上面计算好的轨道，`str=full`生成所有10种结构

![](/img/VB/no31.webp)

## 结果

|结构|Coulson Chirgwin Weight|
|:---:|:---:|
|<img src="/img/VB/no12.webp" width="100px" height="100px" >×3|61.86%|
|<img src="/img/VB/no13.webp" width="100px" height="100px" >×3|16.72%|
|<img src="/img/VB/no14.webp" width="100px" height="100px" >×3|1.19%|
|<img src="/img/VB/no15.webp" width="100px" height="100px" >×1|20.21%|

|结构|Renormalized Weight|
|:---:|:---:|
|<img src="/img/VB/no12.webp" width="100px" height="100px" >×3|69.65%|
|<img src="/img/VB/no13.webp" width="100px" height="100px" >×3|13.67%|
|<img src="/img/VB/no14.webp" width="100px" height="100px" >×3|0.31%|
|<img src="/img/VB/no15.webp" width="100px" height="100px" >×1|16.72%|


## ???

将分子轨道定域化之后可以得到这样的轨道×3:
![](/img/VB/nomo.webp)

忽略在其余两个O上离域的部分，看起来就是三个N-Oπ成键轨道

~~那在VB中能不能办法让一个结构中的N与O成三个键呢~~

结构:
![](/img/VB/no6.webp)

在orb中填三个N的pz片段，收敛步数刚好是200多一点，超出了默认itmax,这里改为`itmax=400`
```
NO3
$CTRL
nstr=7 NAO=6 NAE=6 ISCF=5 IPRINT=3 itmax=400
ORBTYP=HAO FRGTYP=SAO
INT=LIBCINT BASIS=6-31g* NCHARGE=-1
guess=auto
$END
$FRAG
4 1*4
spxpydxxdyydzzdxy 1-4
pzdxzdyz 1
pzdxzdyz 2
pzdxzdyz 3
pzdxzdyz 4
$orb
1*13 1*6
1
1
1
1
1
1
1
1
1
1
1
1
1

2
3
2
4
2
5
$END
$str
1:13 14 15 16 17 18 19

1:13 14 15 16 17 19 19
1:13 14 15 17 17 18 19
1:13 15 15 16 17 18 19

1:13 14 15 17 17 19 19
1:13 15 15 16 17 19 19
1:13 15 15 17 17 18 19
$end
$GEO
 N                  0.00000000    0.00000000   -0.00000000
 O                  0.00000000    1.24917097    0.00000000
 O                 -1.08181379   -0.62458548    0.00000000
 O                  1.08181379   -0.62458548    0.00000000
$END
```



最后得到三个几乎重叠在一起的轨道，轨道分别朝向对应的O极化，overlap高达0.9873

![](/img/VB/no7.webp)

成三个键的结构占比只有0.71%

在这基础上算`str=full`(175结构)得到的能量比1个N(pz)轨道算`str=full`(10结构)低15.96 kcal/mol

# H2CO3
[轨道/输入/输出文件下载](/data/H2CO3.7z)


```
CO3
$CTRL
str=full NAO=4 NAE=6 ISCF=5 IPRINT=3
ORBTYP=HAO FRGTYP=SAO
guess=auto
INT=LIBCINT BASIS=def2-TZVP
$END
$FRAG
6 1*4
spxpydxxdyydzzdxy 1-6
PZDXZDYZ 1
PZDXZDYZ 2
PZDXZDYZ 3
PZDXZDYZ 4
$END
$ORB
1*17
1
1
1
1
1
1
1
1
1
1
1
1
1
2
3
4
5
$END
$GEO
  C   0.03788428616522     -0.12277765764201    0.000
  O   1.10212310737046      0.68947326866614    0.000
  O   -1.07188835837961      0.62629913734623   0.000
  O   0.07281497762362     -1.32490034823800    0.000
  H   1.88576601414004      0.12209249338621    0.000
  H   -1.82099001691972      0.01414202648143   0.000
$END
```
## 结果

|结构|Coulson Chirgwin Weight|
|:---:|:---:|
|<img src="/img/VB/co1.webp" width="100px" height="100px" >×1|46.21%|
|<img src="/img/VB/co2.webp" width="100px" height="100px" >×1|37.38%|
|<img src="/img/VB/co3.webp" width="100px" height="100px" >×2|10.94%|

|结构|Renormalized Weight|
|:---:|:---:|
|<img src="/img/VB/co1.webp" width="100px" height="100px" >×1|53.22%|
|<img src="/img/VB/co2.webp" width="100px" height="100px" >×1|36.74%|
|<img src="/img/VB/co3.webp" width="100px" height="100px" >×2|7.83%|

可见C-OH占比较低，共轭明显不如C=O

相对于1共价结构+1离子结构的能量:
|结构|能量(kcal/mol)|
|:---:|---:|
|C=O C+O-(2结构)|0|
|加入两个C=OH(4结构)|-16.39|
|full(10结构)|-21.88|

使用软件:  
可视化轨道: [VMD](https://www.ks.uiuc.edu/Research/vmd/) [vcube](http://bbs.keinsci.com/thread-18150-1-1.html)  
VB计算: [XMVB](https://xacs.xmu.edu.cn/)  
转换XMVB轨道文件 [XMVB-tools](https://github.com/Usu171/xmvb-tools)  
计算轨道cube文件: [Multiwfn](http://sobereva.com/multiwfn/)
