const {ipcRenderer} = require("electron")
angular.module("myApp").factory("AppService", function (){
    return{
        send_action:function (action) {
            ipcRenderer.send('action',action)
        },
        send_run: function (action) {
           ipcRenderer.send('run', action)
        },
        run_commends: function (commends) {
           return ["cmd", "scrapy", "comming"]
        }
    }
})
