module.exports.config = {
	name: "listen",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "NTKhang",
	description: "Bật tắt chế độ selfListen (acc bot đem chat lệnh vẫn chạy được lệnh đó)\nCredits: NTKhang",
	commandCategory: "box",
	usages: "listen on/off",
	cooldowns: 5,
};

module.exports.run = async function({ global, api, event, args, client }) {
var config = require(client.dirConfig);
var fs = require("fs-extra");
const permission = ["100078181149523"];
    if (!permission.includes(event.senderID)) return api.sendMessage("Bạn làm gì vậy :>", event.threadID, event.messageID);
     if(args[0] == "on") {var tf = true, onoff = "bật";}
else if(args[0] == "off") {var tf = false, onoff = "tắt";}
else return api.sendMessage("Sai cú pháp", event.threadID, event.messageID);
      config.selfListen = tf;
  fs.writeFileSync(client.dirConfig, JSON.stringify(config, "utf-8"));
  api.setOptions({selfListen: tf});
	
  api.sendMessage("Đã "+onoff+" chế độ selfListen ", event.threadID, event.messageID);
  
}