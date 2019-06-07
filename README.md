# WechatAppOfCanteen

***

## TODO

* 在`mainPage.wxml`中为每道菜的`view`中加上`data-recipeid`用来跳转`detail`页面

* 后端进行异常处理，特别是错误时返回错误码，前端提示用户错误

* 后端实现根据用户ID来返回相应的Order列表

* 结算页面

* mainPage重构

* 性能提升，如`wx:key`替换`wx:for`

* 推荐算法

***

## FIXIT

* `detail`页面的抽屉`css`修正，主要是`.commentBox`，此外实现页面的滑动

* 结算页面返回后主页页面加载失败，需要下拉刷新

* Order页面三个订单栏文字图片对齐

## 第三阶段新锅
* order数据库增加时间属性
* recipe表增加窗口属性
* 订单表拆分
