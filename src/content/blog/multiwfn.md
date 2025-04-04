---
title: Multiwfn隐藏功能
banner: /img/Multiwfn.webp
date: 2024-05-16 17:33:08
description: Multiwfn隐藏功能
tags:
  - 计算化学
  - Multiwfn
categories: Multiwfn
cover: /img/Multiwfn.webp
---

# Multiwfn隐藏功能

## 程序里完全没有说明的隐藏选项

### 1000 主要隐藏选项

```
  ---------------------------- Special functions ----------------------------
 0 Return to main menu
 1 Set reference point, current:    0.000000    0.000000    0.000000 Bohr
 2 Set iuserfunc, current:    0            3 Set iskipnuc, current:    0
 4 Set the plane for user-defined function 38 (Not defined)
 5 Set global temporary variable, current:    0.00000000E+00
 10 Set number of threads of parallel calculation, current:  8
 11 Reload settings.ini file
 12 Add a Bq atom to specific position
 13 Convert bndmat.txt in current folder to Gaussian .gjf file with bond orders
 14 Convert current wavefunction to .rad file
 15 Make orbitals equivalent to basis functions
 16 Define one or two fragments for special purpose
 17 Generate promolecular wavefunction by calculating and combining atomic ones
 90 Calculate nuclear attractive energy between a fragment and an orbital
 91 Exchange orbital energies and occupations
 92 Calculate result of various kinetic energy functionals
 93 Output all Becke's integration points to intpt.txt in current folder
 97 Generate natural orbitals based on density matrix outputted by MRCC program
 99 Show EDF information (if any)
 100 Check the sanity of present wavefunction
 201 Ring-ring distance&angle statistical analysis for a trajectory
 202 Ring rotation statistical analysis for a trajectory
 1303 Setup fractional calculus
```


### 2000 Very special functions

This routine use atomic grid to perform integration over whole space with Becke partition. Because Becke partition is sharp enough, molecular grid is not needed

```
              ---------- Energetic Information Project ----------
 0 Return
 Select type of energetic information
 1 Shannon entropy
 2 Fisher information
 3 Alternative Fisher information
 4 Relative Shannon entropy
 5 Relative Fisher information
 6 Alternative relative Fisher information
```

### -15 fuzzySBL

The codes in this file are written specific for Shubin Liu's project

### -10 -11

-10: 同q，退出程序  
-11: 同r, 加载新文件

### 4 5, 11x

111: 两原子Becke权重重叠  
112: 两原子Hirshfeld权重重叠

### 4, 5xx

500: Calculate rho(A)*ln[rho(A)/rho0(A)]  
510: Calculate rho(A)  
511: Calculate rho0(A)  
512: other ln[rho(A)/rho0(A)]

501: Calculate sum{rho(A)*ln[rho(A)/rho0(A)]}  
502: Calculate sum(x), where x=[rho(A)-rho0(A)]/rho(A)  
503: Calculate difference between total relative Shannon entropy and deformation density  
504: Calculate 2nd relative Onicescu information sum{[rho(A)]^2/rho0(A)}  
505: Calculate 3rd relative Onicescu information sum{[rho(A)]^3/[rho0(A)]^2}/2

### 5, 5xx

504: 2nd relative Onicescu information  
505: 3nd relative Onicescu information

### 7, 3 4

⚠Not available because integration errors of below two methods by means of Becke integration are too large  
3: Integrate electron density in voronoi cell  
4: Adjusted method 3 by [Rousseau et al.](https://doi.org/10.1016/S0166-1280(00)00692-8)

### 9, -3

There is a hidden option -3 in main function 9, it is used to calculate MCBO under Löwdin orthogonalized basis. The only difference between this option and the option 2 described above is that this option performs Löwdin orthogonalization for basis functions before calculating the MCBO. Since this method does not have obvious advantage over the standard MCBO definition, this option is rarely used and thus invisible in the interface. However, if you have interesting, you can have a try.

### 12

后处理, 66: pdb 文件输出CONECT  
also see Manual 3.15.4 [使VMD根据pdb文件中的CONECT字段设定原子连接关系 - 思想家公社的门口：量子化学·分子模拟·二次元](http://sobereva.com/121)

后处理, 16: Export center of surface facets as pdb file  
!Can also output to xyz file (输出.xyz被注释)

### 100

10: Generate spherically averaged atomic radial density

-4, -5:

```
------ Integrate difference between two wavefunctions  
itype=1 : Integrate (f_wfn1 - f_wfn2)**2  
itype=2 : Integrate |f_wfn1 - f_wfn2|  
where f_wfn1 means real space function for wavefunction file 1, f_wfn2 is that for wavefunction file 2  
This function was specifically written for realizing Michael G. Medvedev's idea
```

## 选项已移动

选项被移动到其他位置，原选项仍然可用但被隐藏

100, 13 Calculate HOMA and Bird aromaticity index  
已移动至25, 6

100, 24 Obtain NICS_ZZ value for non-planar or tilted system  
已移动至25, 4

200, 4 ICSS
已移动至25, 3

200, 7 Parse output of (hyper)polarizability task of Gaussian  
已移动至24, 1

200,8 Study (hyper)polarizability by sum-over-states (SOS) method  
已移动至24, 2

300,3 Visualize (hyper)polarizability via unit sphere and vector representations  
已移动至24, 5

## 快捷入口

⚠大小写敏感, 同100, 2内选项  
oi: ORCA输入文件  
pi: Psi4输入文件  
gi: Gaussian输入文件  
cp2k: CP2K输入文件  
QE: Quantum Espresso输入文件

cp: CP2k相关功能, 同100, 7

iu: 选择iuserfunc  
也可以使用1000, 2

geomparm: 输出当前体系所有键长，角度，二面角到.txt  
同GUI内Tools - Export all internal coordinates

MPP, cav: 同100, 21内选项

pdb, xyz, cif: 同100, 2内选项

