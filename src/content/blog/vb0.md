---
title: VB(0)-XMVB安装
banner: /img/VB/MOVB.webp
date: 2024-09-05 14:14:19
description: VB(0)-XMVB安装
tags:
  - XMVB
  - 价键理论
categories: 价键理论
cover: /img/VB/MOVB.webp
---

本系列文章使用XMVB进行价键理论计算  
XMVB本体可从[官网](https://xacs.xmu.edu.cn/)下载（需注册）

解压后得到  
![](/img/VB/1.webp)

之后运行目录下的post-install  
该脚本会修改`bin/xmvb` `bin/preint`中的VBDIR

(记得将`bin`添加进`PATH`)

`basis/basis.idx`记录了软件内输入的基组名称与具体文件的对应关系，可以在其中添加自定义基组(基组名称需大写)。  
注意XMVB不支持比f更高的角动量，也不支持赝势

doc内的手册与官网在线手册内容不相同

`libgamess-xmvb.a`用于编译安装GAMESS-XMVB

运行xmvb需要[MPICH](https://www.mpich.org/)和`libgfortran.so.3`

`libgfortran.so.3`可以通过安装gcc6获取

不想这么麻烦可以在[网上找一个下载](https://github.com/nipreps/dmriprep/blob/master/.docker/fsl-6.0/lib/libgfortran.so.3)  
之后将其所在目录添加进`LD_LIBRARY_PATH`


运行：`xmvb x.xmi`, `mpirun -np 1 xmvb x.xmi`  
测试：
1.xmi
```
H2
$ctrl
nstr=3 nao=2 nae=2 iscf=5 iprint=3
orbtyp=hao frgtyp=sao
int=libcint basis=def2-TZVP
$end
$frag
1*2
SPXPYPZ 1
SPXPYPZ 2
$end
$orb
1*2
1
2
$end
$str
1 1
2 2
1 2
$end
$geo
H 0 0 0
H 0 0 0.75
$end
```