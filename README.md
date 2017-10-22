#### 优化一览 

##### index
- 压缩`css` 文件
- 由于国内服务器的限制，所以我将所有需要连接到外网的图片和`js` 文件都下载到本地进行加载
- `js` 压缩
- 图片进行了尺寸的改变，并对首页的图片进行了雪碧图处理
- `print.css` 文件统一使用了媒体查询
- `js` 文件采用`async` 加载

##### pizza
- 使用`gulp` 将`html` ,`css` ,`js` 文件进行压缩工作，输出内容在`dist` 文件夹中，请运行`dist` 目录下的`pizza.html` 进行确认
- 性能调优方面
	- 优化了页面滚动时的体验，帧数上升到60帧
		- 滚动发生时，设置pizza位置的参数由left改为transform
		- 滚动发生时，大部分浏览器无法监听`scrollTop` 属性，改为使用`scrollY` 属性
		- 执行动画放入rAF中
	- 优化了调整pizza大小时的响应速度
		- 将读写width以及offsetWidth的地方隔离开
		- 获取所有pizza的集合之后，将集合赋值给变量进行调用，避免反复获取集合的操作
		
##### 项目确认
- `index` 请直接运行`index.html` 进行去人
- `pizza` 请运行`dist` 中的`pizza.html` 进行去人
- 我在外网上已经部署了两个链接，用于page speed的测试，您也可以直接访问这一链接检查效果
	- http://dev.herdsric.com:230/index.html
	- http://dev.herdsric.com:230/views/pizza.html
	
#### 项目要求完成情况
- [x] **关键渲染路径** index.html 在移动设备和桌面上的 PageSpeed 分数至少为90分。
- [x] **帧速** 对 views/js/main.js 进行的优化可使 views/pizza.html 在滚动时保持 60fps 的帧速。
- [x] **计算效率** 利用 views/pizza.html 页面上的 pizza 尺寸滑块调整 pizza 大小的时间小于5毫秒，大小的调整时间在浏览器开发工具中显示。
- [x] **README** README 文件含有成功运行应用所需的所有详细步骤以及学生在 index.html 和 views/js/main.js 中对 pizza.html 进行的优化概述。
- [x] **注释** views/js/main.js 中含有 pizza.html 的注释，其能有效解释较长代码程序。

