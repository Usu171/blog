---
title: Autoopt (for ORCA)
banner: /img/F3.webp
date: 2023-11-20 16:13:24
description: 自动检测虚频并调整结构
tags:
  - 计算化学
  - ORCA
categories: 计算化学
cover: /img/F3.webp
---

# Autoopt (for ORCA)

如果opt遇到虚频则调用orca_pltvib向虚频方向调整结构，然后继续opt，直到没有虚频

也可以使用ORCA的Compound Methods实现，见手册9.47 (ORCA 5.0.3)

使用方法: 更改`orca_path`，将opt,freq任务的ORCA输入文件命名为`1.inp`  
如果遇到虚频将会创建2.inp继续优化

封面为直线$D_{ih}$ F3$^{+}$在B3LYP/def2-TZVP下优化  
1.inp $\to$ 2.inp $\to$ 3.inp  
$D_{ih} \to C_{ih} \to C_{2v}$  
可视化使用VSCode插件[Protein Viewer](https://marketplace.visualstudio.com/items?itemName=ArianJamasb.protein-viewer) ([mol*](https://molstar.org/)的VSCode版)



```bash
n=2   # 取orca_pltvib的第多少帧


# orca路径
orca_path=/home/usu171/downloads/orca_5_0_4

i=1
while true
do

    $orca_path/orca $i.inp |tee $i.out

    a=$(grep "\*\*\*imaginary mode\*\*\*" $i.out | head -1 | awk '{sub(/:/, "");print $1}')
    if  [ -n "$a" ]; then
        $orca_path/orca_pltvib $i.hess $a


        xyzfilename=$i.hess.v00$a.xyz

        number=$(awk '{print $1}' $xyzfilename | head -1)

        startline=$((3 + ( $n - 1 )*( $number + 2 )))
        endline=$((startline + number - 1))

        sed -n "${startline},${endline-1}p" $xyzfilename | awk '{print $1,$2,$3,$4}' > temp.txt


        j=$((i+1))
        cp $i.inp $j.inp

        new_startline=$(grep -nE '\*\s+xyz' $i.inp | head -1 | awk -F : '{print $1}')
        new_endline=$((new_startline + number))
        new_startline=$((new_startline + 1))

        sed -i -e "${new_startline}r temp.txt" -e "${new_startline},${new_endline}d" $j.inp

        rm temp.txt
        i=$((i+1))
    else
        break
    fi

done
```

F3$^{+}$输入文件

```
! B3LYP D3 def2-TZVP def2/J RIJCOSX opt freq tightSCF noautostart miniprint nopop
%maxcore  1000
%pal nprocs  8 end
* xyz   1 1
F    1.4 0 0
F    0 0 0
F    -1.4 0 0
 *
```