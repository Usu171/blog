---
title: 本地二次元图像搜索
banner: /img/PxIMSE/1.webp
date: 2024-11-25 15:34:41
description: 基于 DeepDanbooru CLIP PaddleOCR
tags:
  - Nuxt.js
categories: 未分类
cover: /img/PxIMSE/1.webp
---

# PxIMSE

基于[DeepDanbooru](https://github.com/KichangKim/DeepDanbooru), [CLIP](https://github.com/openai/CLIP) 和 [PaddleOCR](https://paddlepaddle.github.io/PaddleOCR/main/index.html)的本地图像搜索


![1](/img/PxIMSE/1.webp)

GitHub: [PxIMSE](https://github.com/Usu171/PxIMSE)



[MongoDB](https://www.mongodb.com/) 存储图片信息、DeepDanbooru 和 OCR 结果，CLIP 结果存储在向量数据库 [Milvus](https://milvus.io/)

前端 [Nuxt.js](https://nuxt.com/) [Vuetify](https://vuetifyjs.com/zh-Hans/)  
后端 [FastAPI](https://fastapi.tiangolo.com/)


### 支持的文件名格式

图片来自 [Pixiv](https://www.pixiv.net/), [PixivBatchDownloader](https://github.com/xuejianxianzun/PixivBatchDownloader), [PixEZ](https://github.com/Notsfsssf/pixez-flutter) ... , [Twitter Media Downloader](https://greasyfork.org/zh-CN/scripts/423001-twitter-media-downloader), [yande.re](https://yande.re/) 或者其他来源，但是DB中不会记录id信息:

- pixiv: {user_id}_{id}_p{index} **(建议)**
- pixiv: {id}_p{index}
- twitter: twitter_{user_name}(@{user_id})\_{date}\_{id}_photo
- yande.re: yande.re {id} {tags}


## Pre-requisites

- [Python 3.10+](https://www.python.org/downloads/)
- [Node.js 20+](https://nodejs.org/en/)
- [Nginx](https://nginx.org/)
- [Pre-trained DeepDanbooru model](https://github.com/KichangKim/DeepDanbooru/releases/tag/v3-20211112-sgd-e28)
- [MongoDB](https://www.mongodb.com/)
- [Milvus](https://milvus.io/)
- [meilisearch](https://www.meilisearch.com/) (可选)

DB配置参考`docker-compose.yml`

### 安装依赖

```sh
pip3 install -r requirements.txt
```

torch、tensorflow、paddlepaddle所需CUDA环境可能冲突，需要手动配置


```sh
pnpm install
```

### 配置

`python/config.yml`配置图片文件夹和DB设置

需要其他CLIP模型请更改`clip1.py`和`milvus.py`，默认使用最便宜的OpenAI ViT-B/32（输出512维向量，其他模型可能是768维）

更多模型: [OpenCLIP](https://github.com/mlfoundations/open_clip) [Jina CLIP](https://huggingface.co/jinaai/jina-clip-v1)

`config.mjs`配置Nginx和API地址

## 使用方法

### 导入图片

1. 导入MongoDB

```sh
python import_images.py mongo
```

2. 导入CLIP结果到Milvus

```sh
python import_images.py milvus
```

3. 从Pixiv获取图片信息 (可选)

```sh
python import_images.py pixiv
```

4. 尝试将数据库中文档的`username`分配给相同`userid`但没有`username`的文档 (必须给`userid`和`username`建立索引，否则非常耗时) (可选)

```sh
python import_images.py update
```

5. 导入OCR结果到meilisearch (可选)

```sh
python import_images.py meili
```

### 2. 启动服务


```sh
cd python
uvicorn api:app --host 0.0.0.0 --port 8000
```

```sh
pnpm dev
```

## 说明

MongoDB文档结构：  
![d](/img/PxIMSE/d.webp)

tags为DeepDanbooru识别结果  
tags1是从Pixiv获取到的结果，对于yandere图片为文件名内包含的标签

### Query 部分格式:

### 存在:

tags.xxx  
tags1:xxx (AND)  
|tags1:xxx (OR)

### 不存在:

!tags.xxx  
!tags1:xxx

### 大于、小于、等于、不等于

filesize;>1000000  
tags.xxx;<=0.9  
likeCount;=100  
viewCount;!=200  
多个条件:  
date;>2000-01-01&<2010-01-01  
字符串:  
userid;="12345"

### OCR文本内容(meilisearch):

m;xxx

### OCR文本长度:

textlen;>xx  
textlen;<=xx

### Sort 部分格式:

升序: `filesize;1`  
降序: `filesize` 或 `filesize;-1`

### Milvus

Milvus 部分默认使用基于图的 HNSW 索引，M值取32，efConstruction为64（未经充分测试）  
该索引比 FLAT（对于每个查询都计算数据库中所有向量）快至少3倍（未经充分测试）  
取值过高建立索引的速度可能十分缓慢  
向量归一化后再存入 Milvus ，以内积衡量向量距离

Milvus 的GPU版本还支持GPU索引，但是目前只支持 FP32

Milvus 向量查询结果最多只能返回 16,384 条记录


### 消失的Pixiv图片

2019-2024保存的44万图片在第3步导入完成后大约有 1/13 记录到 errors（p站上找不到该图片）  
对于作者图片没有删除完全的情况，第4步可以尝试将数据库中文档的`username`分配给相同`userid`但没有`username`的文档（只对记录了`userid`的第一种文件名有效）



Inspired by: [clip-image-search](https://github.com/atarss/clip-image-search)