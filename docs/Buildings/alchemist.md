---
title: "炼金塔"
---
<!-- @include: ../temp.md -->
# 炼金塔
炼金塔是[炼金术士]工作的地方。[炼金术士]酿造药水并收获地狱疣和槲寄生。

## 信息

![](/assets/image/buildings/alchemist.png)

工人：炼金术士

研究：你需要研究“[魔法药水](../Systems/research#technologymagicpotions)”解锁此建筑！

## 配方
每建筑一层，炼金塔可以学习的配方数量就会加倍。

| 建筑等级 | 配方数量 |
|----------------------|-------------------|
| 1                    | 10                |
| 2                    | 20                |
| 3                    | 40                |
| 4                    | 80                |
| 5                    | 160               |

## 炼金塔GUI

炼金塔GUI的第一个标签是主界面。

![](/assets/image/gui/buildings/alchemist/main.png)

+ 页眉：
    + **建筑名称**：显示建筑的名称，包括建筑的等级。
    + **:pencil2:**：允许你重新命名建筑。建筑的等级将始终在名称之后列出。
    + **分配的工人**：告诉你分配给该建筑的工人。
+ 控件：
    + **管理工人**：允许你更改分配到该小屋工作的工人。每个小屋只能有一个工人。只有在将[市政厅]的工人雇佣模式更改为手动时，此选项才起作用，否则你的居民将自动雇佣。
    + **召回工人**：将该建筑的工人召回到他们的小屋方块。如果他们被困在某个地方，你想查看他们有什么，或者想直接给他们一些东西，可以使用此功能。
    + **建造选项**：允许你为此小屋创建建造、升级或修复建造订单。要了解有关建造系统的更多信息，请访问[建筑工]页面。
+ 请求系统：
    + **提取优先级**：你可以设置[快递员]访问该小屋并提取物品（当该小屋的工人发出请求时）的优先级，或者你可以告诉快递员永远不要访问该小屋提取物品。（对于提取优先级，10是最高的。）
    + **立即请求提取**：你可以点击此按钮，以告知任何可用的[快递员]前来提取该建筑的所有物品。
+ 页脚：
    + **信息按钮**：一些小屋具有游戏内指南。按下`？`按钮即可访问它。
    + **库存**：在这里，你可以访问小屋方块的存储，工人在此小屋中获取和存放材料。他们还将使用在建造或升级小屋时放置的任何[架子]，因此请务必检查它们！
    + **木箱图标**：单击此按钮以查看小屋存储的所有物品（包括小屋方块的库存和随小屋一起提供的任何架子）。单击物品计数旁边的?按钮将突出显示其所在的存储容器。

GUI的第二个标签是**酿造配方**。

![](/assets/image/gui/buildings/alchemist/brewing-recipes.png)

在这里，你可以看到该建筑了解的所有酿造配方。箭头允许你在优先级中上下移动它们。你还可以禁用或删除特定的配方。

* **学习配方**：单击学习配方时，它会打开一个网格，允许你学习该小屋的酿造配方（而不是工人）。

GUI的第三个标签是**任务**。

![](/assets/image/gui/buildings/alchemist/tasks.png)

此标签显示该小屋正在处理的任何请求以及其去向。