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

![Placing a Second Town Hall](/assets/image/gui/buildings/townhall/th_secondplace.png)

### Deleting a Colony

To delete your colony, place a Town Hall outside your current colony border (either by mining or deconstructing your old Town Hall or by crafting a new one). Interacting with the newly placed Town Hall outside of the current borders will prompt you to delete your colony.
Alternatively, if you have the proper permissions, you can use [commands](../../source/systems/command).

## {% building %} GUI

### **Information:** This is the overall information section of the Town Hall GUI.

{% building_gui_content_block_custom image_key="th_information" image_alt="Townhall information" cols=6 %}
**Page 1:** Here you will see some statistics on your citizens, like the number of citizens you have out of your max. Green is less than 90% of your max, orange is above 90%, and red is full. If it's red, hovering over the numbers will show what you need to do to get more citizens. The page also shows how many of each type of worker you have.

**Page 2:** Here you will see the overall happiness of the colony's citizens and any events that happened within the colony (the newest events are at the bottom). You can click the button to switch to a permission log, which will show any illegal actions that happened in the colony (like if a player tried to break a block when they aren't allowed to). Clicking the plus next to an illegal action will change it to a legal action if the player tries to do it again. For more information, see the [Protection system](../../source/systems/protection) and the Permission tab of the {% building townhall %} GUI.
{% endbuilding_gui_content_block_custom %}

### **Actions:** This is the most important section.

{% building_gui_content_block_custom image_key="th_actions" image_alt="Townhall actions" cols=6 %}
**Page 1:** Here you will see the name of your colony as well as the building level of the {% building townhall %}. And the buttons:
- **Build Options:** Lets you create a build, upgrade, reposition, or repair build order for the {% building townhall %}. To learn more about the building system, please visit the {% building_link builder %} page.
- **Rename Colony:** To change the name of your colony (from Your Username's Colony, which is the default) to anything you want.
- **Hire Mercenaries:** Here you can hire mercenaries to help defend your colony. Be warned, they're mean and will steal from citizens!

**Page 2:** This is only enabled if PVP is turned on in the [config file](../../source/misc/configfile). Here you have:
- **Allies:** Other colonies that you have added as allies and that have confirmed your colony as an ally as well.
- **Feuds:** Other colonies that you have added as a feud and that have confirmed your colony as a feud as well.
{% endbuilding_gui_content_block_custom %}

### **Permissions:** Here you can invite other players to your colony to collaborate.

{% building_gui_content_block_custom image_key="th_permissions1" image_alt="Townhall permissions" cols=6 %}
**Page 1:** Here you type the name of the player you want to add.

**Page 2:** Shows the list of players that have ben added as well as their current rank. You can click on the "-" or "+" to give them a higher rank or lower rank.
{% endbuilding_gui_content_block_custom %}

{% building_gui_content_block_custom image_key="th_permissions2" image_alt="Townhall permissions" cols=6 %}
**Page 3:** Here you can select the rank that you would like to manage.

**Page 4:** Here are the individual permissions (for the rank you have selected on the previous page) that you can toggle *ON* or *OFF*, giving each rank the permission you want. **Note:** the Fight Guards permission causes Guards to treat the player as an enemy and attack them. It is only recommended for Hostile players.
{% endbuilding_gui_content_block_custom %}

{% building_gui_content_block_custom image_key="th_permissions3" image_alt="Townhall permissions" cols=6 %}
**Page 5:** Where you enter the position (X, Y, Z) of the block that you want to make free for interaction.

**Page 6:** Here you will see the list of block positions that you have added as free for interaction and can remove them.
{% endbuilding_gui_content_block_custom %}

### **Citizens:** This section displays the names and skill levels of the citizens in your colony.

{% building_gui_content_block_custom image_key="th_citizens" image_alt="Townhall citizens" cols=6 %}
**Page 1:** When you select a citizen, their stats and job will appear here. You can also recall them to the Town Hall block on this page.

**Page 2:** Here you will see a list of the citizens in your colony. Select a citizen to see their skills.
{% endbuilding_gui_content_block_custom %}

### **Settings:** This section is where you can control how your citizens will be hired and assigned housing in your colony, among other things.

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
