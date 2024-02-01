---
title: "市政厅"
---
<!-- @include: ../temp.md -->
# 市政厅
市政厅是殖民地的中心部分。

市政厅方块**不能**在已经放置了通过[补给营地/船](../Items/supplycampandship)获得的市政厅**之前**在工作台制作。如果有需要，它也可以像其他方块一样在创造模式下获得，或通过命令获取。

## 创建新的殖民地

### 勘察区域

在决定放置市政厅的位置之前，请确保仔细勘察您的区域。您的殖民地将以市政厅方块为中心的4块半径（每个方向4块）开始。确保这是您想要建立殖民地的地方。

### 放置您的市政厅

在仔细决定放置市政厅的位置后（请记住，您放置市政厅方块的位置将是您殖民地受保护区域的中心。一旦放置，该区域将被确定，无法更改），使用您的[建筑工具]将市政厅方块放置在地面上。

右键单击您希望放置市政厅的区域。建筑的GUI将显示，显示建筑的3D预览。您可以使用箭头按钮将建筑移动到所需的位置。

确保在GUI中使用`+`和`-`选项，以确保小屋的地面水平位于您希望的位置。并非所有的小屋方块都位于地面上。

一旦您确认放置市政厅（绿色对勾），市政厅方块将被放置。

### 创建您的殖民地

一旦您放置了市政厅方块，您需要右键点击它并选择“创建新殖民地”。
<br>
<img alt="Creating New Colony" src="/assets/image/gui/buildings/townhall/th_colonycreationGUI.png"/>

一个新的殖民地将被创建，您的殖民地的范围将被确定，并且整个区域将被保护。

### 保护区域

当您开始一个殖民地时，最初设置的区域还具有附加的保护。保护系统包括阻止任何玩家放置/破坏或与任何类型的方块交互，放置熔岩或水以及放置/点燃TNT。一旦建立，它还将显示在信息屏幕中。

殖民地的受保护区域（一旦放置了市政厅）将取决于[配置](../Misc/configfile)，但默认情况下将是以您首次放置市政厅方块的位置为中心的4块半径。因此，请仔细规划您想要放置市政厅的位置。您受保护的殖民地区域包括从基岩到天际限制的山脉、丘陵、湖泊、海洋、洞穴、世界生成的结构等。

由于每个殖民地的受保护区域，您必须仔细勘察周围环境，确保您周围没有其他殖民地，以防止您放置市政厅或在该方向上限制您的殖民地区域。

一旦放置市政厅方块，这将是您城镇受保护半径的中心。如果您决定希望实际的市政厅建筑建在不同的位置（在当前设置的受保护半径内），您可以使用建筑工具打破方块，然后再次放置它。删除并替换市政厅方块不会移除您城镇的受保护区域。唯一的方法是通过拥有OP或管理员权限的人通过[命令](../Systems/command)删除您的殖民地。

如果有另一个殖民地离您当前位置太近，您将无法放置市政厅。

如果您尝试在受保护区域之外放置另一个市政厅，您将收到一条消息：

![放置第二个市政厅](/assets/image/gui/buildings/townhall/th_secondplace.png)

### 删除殖民地

要删除您的殖民地，请将一个市政厅放置在当前殖民地边界之外（通过挖掘或拆除旧的市政厅，或通过制作一个新的市政厅）。与当前边界之外的新放置的市政厅交互将提示您删除您的殖民地。
或者，如果您具有适当的权限，您可以使用[命令](../Systems/command)。

## 市政厅GUI

### 信息

这是市政厅GUI的总体信息部分。

![](/assets/image/gui/buildings/townhall/th_information.png)

**第1页：** 在这里，您将看到一些有关您的居民的统计信息，比如您的最大居民数中有多少居民。绿色表示低于您的最大居民数的90%，橙色表示高于90%，红色表示已满。如果是红色，将鼠标悬停在数字上将显示您需要做什么来获取更多的居民。该页面还显示了您拥有的每种类型的工人数量。

**第2页：** 在这里，您将看到殖民地居民的整体幸福度以及殖民地内发生的任何事件（最新的事件在底部）。您可以点击按钮切换到权限日志，它将显示在殖民地发生的任何非法行为（例如，如果玩家试图在不允许的情况下破坏方块）。点击非法行为旁边的加号将其更改为合法行为，如果玩家再次尝试执行该行为。有关更多信息，请参见[保护系统](../Systems/protection)和市政厅 GUI 的权限选项卡。

### 行为

这是最重要的部分。

![](/assets/image/gui/buildings/townhall/th_actions.png)

{% building_gui_content_block_custom image_key="th_actions" image_alt="Townhall actions" cols=6 %}
**第1页：** 在这里，您将看到您殖民地的名称~~，以及市政厅的建筑级别~~。还有以下按钮：
- **建造选项：** 允许您创建市政厅的建造、升级、重新定位或修理建筑订单。要了解有关建筑系统的更多信息，请访问[建筑工小屋]页面。
- **重命名殖民地：** 更改您殖民地的名称（默认为`{playername}的殖民地`）为您想要的任何名称。
- **雇佣雇佣兵：** 在这里，您可以雇佣雇佣兵来帮助保卫殖民地。请注意，他们很凶恶，会从居民那里偷东西！

**第2页：** 仅在[配置文件](../Misc/configfile)中启用了PVP时才会启用。在这里，您可以找到：
- **盟友：** 您已添加为盟友并已确认您殖民地为盟友的其他殖民地。
- **敌对：** 您已添加为敌对并已确认您殖民地为敌对的其他殖民地。

### 权限

在这里，您可以邀请其他玩家加入您的殖民地以进行协作。

![](/assets/image/gui/buildings/townhall/th_permissions1.png)

**第1页：** 在这里，输入你要添加的玩家的名称。

**第2页：** 显示已添加的玩家列表以及他们当前的等级。您可以点击“-”或“+”来提升或降低他们的等级。

![](/assets/image/gui/buildings/townhall/th_permissions2.png)

**第3页：** 在这里，您可以选择要管理的等级。

**第4页：** 这里是您可以切换*开*或*关*的个体权限（对于您在上一页上选择的等级），从而为每个等级提供所需的权限。

::: tip
`战斗卫兵`权限会使卫兵将玩家视为敌人并攻击他们。这仅建议用于敌对玩家。
:::

![](/assets/image/gui/buildings/townhall/th_permissions3.png)

**第5页：** 在这里，您输入您希望使其可以互动的方块的位置（X、Y、Z）。

**第6页：** 在这里，您将看到您已添加为可以自由互动的方块位置的列表，并且可以删除它们。

### **Citizens:** This section displays the names and skill levels of the citizens in your colony.

{% building_gui_content_block_custom image_key="th_citizens" image_alt="Townhall citizens" cols=6 %}
**Page 1:** When you select a citizen, their stats and job will appear here. You can also recall them to the Town Hall block on this page.

**Page 2:** Here you will see a list of the citizens in your colony. Select a citizen to see their skills.
{% endbuilding_gui_content_block_custom %}

### 设置

This section is where you can control how your citizens will be hired and assigned housing in your colony, among other things.

{% building_gui_content_block_custom image_key="th_settings" image_alt="Townhall settings" cols=6 %}
**Page 1:** There are four buttons here:
- **Worker hiring mode:** Clicking on this button lets you switch between automatic or manual. If it's in automatic mode, you can't fire or hire any citizen from any worker hut and the best unemployed citizen will be hired for you. In manual mode you will be able to *hire* and *fire* whichever citizen you want at any time.
- **Housing assignment mode:** Clicking on this button lets you switch between automatic or manual. If it's in automatic mode, citizens will be assigned a house as soon as they spawn (if housing is available). In manual mode, you can select which citizens will be housed in each [House](house) or [Tavern](tavern). This is better if you have a large colony and many workers spread out in a large area so you can house your citizens as close as possible to their workplace.
- **Print help messages:** Clicking on this button lets you choose whether MineColonies help messages will appear in the chat. It is recommended that this be turned on for first-time players.
- **Kids will be born:** Clicking on this button lets you choose whether new kids will be born in your colony.

**Page 2:** There are three buttons here:
- **Pick Team Color:** Whatever color you pick from here, your Guards will have a glow of this color around them when you put them in follow mode at their {% building_link guardtower %} or {% building_link barrackstower %}. This is for the PVP system, so you know which Guards are yours when you are fighting. Your citizens' names will also be in this color.
- **Edit Colony Flag:** Clicking this button will open up a banner designer where you can design your colony banner. Your {% worker_link knight %} will wear the finished design on their shields, and it is also used in some schematics.
  ![Town hall GUI banner designer](/assets/image/gui/buildings/townhall/th_colonybannerdesigner.png)
- **Switch Colony Pack:** This option controls the default selected style pack when opening the build tool.
- **Pick Citizen Style:** The option controls how the citizens look. This feature is exclusive for donators.
{% endbuilding_gui_content_block_custom %}

### **Work Orders:** Here you will see the work orders your

{% building_gui_content_block_custom image_key="th_workorders" image_alt="Townhall work orders" cols=6 %}
All the work orders in the order they have been assigned. {% worker_link builder plural=true %} will not start another order until they have successfully completed the top one.

**Page 1:** Blank page except for the header.

**Page 2:** Here are all the build orders for this colony (including decorations and your own schematics as well as huts). Your {% worker_link builder plural=true %} will complete the builds from top to bottom, and you can change the priority of the builds by moving them up or down in the list. You can also delete work orders. When you delete a work order that is currently being built, the Builder will stop building and will continue where they left off if you create the work order again."
{% endbuilding_gui_content_block_custom %}

### **Statistics:** This is the section for the global happiness of your colony so you can see what area needs more attention to raise the happiness level.

{% building_gui_content_block_custom image_key="th_statistics" image_alt="Townhall happiness" cols=6 %}
**Page 1:** The happiness indices. You can keep track of the areas that will lower or raise the happiness of your citizens here. The colors, in order from best to worst, are:
- Green (positive)
- Blue (neutral)
- Yellow (slightly negative)
- Red (negative)

There's also black, which will show up if something went wrong.

**Page 2:** Blank page.
{% endbuilding_gui_content_block_custom %}
