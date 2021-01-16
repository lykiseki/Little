/*
水果互助码
此文件为Node.js专用。其他用户请忽略
支持京东N个账号
 */
//云服务器腾讯云函数等NOde.js用户在此处填写京东东农场的好友码。
// github action用户的好友互助码填写到Action->Settings->Secrets->new Secret里面(Name填写 FruitShareCodes(此处的Name必须按此来写,不能随意更改),内容处填写互助码,填写规则如下)
// 同一个京东账号的好友互助码用@符号隔开,不同京东账号之间用&符号或者换行隔开,下面给一个示例
// 如: 京东账号1的shareCode1@京东账号1的shareCode2&京东账号2的shareCode1@京东账号2的shareCode2
let FruitShareCodes = [
  //ly-离-羊-妃
  //'4fc147a47a2b45f2ac7e31c3e1315976@c7185dd64d3847999cca6b0081495daa@d28ca23ddb934143801ce74229927ac2@7ccd98c2058747e6885a9f5931fdbfd0',
    //ly-梦-离
  '4fc147a47a2b45f2ac7e31c3e1315976@ed87892d286f4f7397b1317650dbec57@c7185dd64d3847999cca6b0081495daa',
  //账号一的好友shareCode,不同好友中间用@符号隔开
  //羊-离-梦-妃
  //'d28ca23ddb934143801ce74229927ac2@c7185dd64d3847999cca6b0081495daa@ed87892d286f4f7397b1317650dbec57@7ccd98c2058747e6885a9f5931fdbfd0',
    //ly-梦-羊
  '4fc147a47a2b45f2ac7e31c3e1315976@ed87892d286f4f7397b1317650dbec57@d28ca23ddb934143801ce74229927ac2',
  //账号二的好友shareCode，不同好友中间用@符号隔开
  //ly-梦-离-羊
  '4fc147a47a2b45f2ac7e31c3e1315976@ed87892d286f4f7397b1317650dbec57',//账号三的好友shareCode，不同好友中间用@符号隔开
]
// 判断github action里面是否有水果互助码
if (process.env.FRUITSHARECODES) {
  if (process.env.FRUITSHARECODES.indexOf('&') > -1) {
    console.log(`您的东东农场互助码选择的是用&隔开\n`)
    FruitShareCodes = process.env.FRUITSHARECODES.split('&');
  } else if (process.env.FRUITSHARECODES.indexOf('\n') > -1) {
    console.log(`您的东东农场互助码选择的是用换行隔开\n`)
    FruitShareCodes = process.env.FRUITSHARECODES.split('\n');
  } else {
    FruitShareCodes = process.env.FRUITSHARECODES.split();
  }
} else if (process.env.JD_COOKIE) {
  console.log(`由于您secret里面未提供助力码，故此处运行将会给脚本内置的码进行助力，请知晓！`)
}
for (let i = 0; i < FruitShareCodes.length; i++) {
  const index = (i + 1 === 1) ? '' : (i + 1);
  exports['FruitShareCode' + index] = FruitShareCodes[i];
}
