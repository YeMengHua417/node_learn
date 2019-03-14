const regedit = require("regedit")



const regpath = 'HKLM\\SOFTWARE\\Bentley\\iModelBridges\\IModelBridgeForMstn'
regedit.list(regpath,(err,result)=>{
    if(err){
        console.log(err)
    }else{
        
        console.log(result[regpath].values)
        if("iModelFrameWorkExe" in result[regpath].values){
            console.log("yes")
        }
        
    }
})
// 可以打印出注册表里面的信息
// D:\node\mystudy\nodeModuleLearn>node regedit.js
// { BridgeLibraryPath:
//    { type: 'REG_SZ',
//      value:
//       'C:\\Program Files\\Bentley\\iModelBridgeMstn\\DgnV8BridgeB02.dll' },
//   AffinityLibraryPath:
//    { type: 'REG_SZ',
//      value:
//       'C:\\Program Files\\Bentley\\iModelBridgeMstn\\DgnV8BridgeB02.dll' },
//   BridgeAssetsDir:
//    { type: 'REG_SZ',
//      value: 'C:\\Program Files\\Bentley\\iModelBridgeMstn\\Assets' },
//   iModelFrameWorkExe:
//    { type: 'REG_SZ',
//      value:
//       'C:\\Program Files\\Bentley\\iModelBridgeMstn\\iModelBridgeFwk.exe' },
//   IsPowerPlatformBased: { type: 'REG_SZ', value: 'false' } }