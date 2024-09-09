const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="uwemdev@hotmail.com"
global.location="Nigeria,Akwaibom,Uyo."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Nigeria/Akwaibom/uyo";
global.github=process.env.GITHUB|| "https://github.com/JORAMKE/joram-md";
global.gurl  =process.env.GURL  || "https://api.whatsapp.com/send?phone=2348110572387&text=Hi%20Uwem%2C";
global.website=process.env.GURL || "https://uwemdev.com" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://uwemdev.com/storage/home/about-file-1724092734.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Uwemdev" 


global.devs = "2348110572387" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348110572387";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "false" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/w6ss4st/photo-2024-04-19-10-02-19.jpg" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,234xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,234xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "null";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_18_03_09_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTgzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDMzLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDc3LFxuICAgICAgICA0MCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDk4LFxuICAgICAgICA4NCxcbiAgICAgICAgMjgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTQ4LFxuICAgICAgICA5MSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDEyNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDAsXG4gICAgICAgIDQwLFxuICAgICAgICAxOCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTI2LFxuICAgICAgICAxMyxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDMwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDkyLFxuICAgICAgICA5LFxuICAgICAgICAyOSxcbiAgICAgICAgMjcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAzMCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTgxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgODEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjU1LFxuICAgICAgICAyNyxcbiAgICAgICAgODUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNjdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMixcbiAgICAgICAgMTM3LFxuICAgICAgICA2MixcbiAgICAgICAgMzMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDkxLFxuICAgICAgICAyMyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNixcbiAgICAgICAgMTIyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMCxcbiAgICAgICAgNjEsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjU1LFxuICAgICAgICAzNyxcbiAgICAgICAgOTYsXG4gICAgICAgIDExMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDExNyxcbiAgICAgICAgOTIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDM0LFxuICAgICAgICAxODYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjExLFxuICAgICAgICAyMjIsXG4gICAgICAgIDUwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDM3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE5MixcbiAgICAgICAgNzcsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTM3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDY2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTAwLFxuICAgICAgICA1NyxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTI1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NixcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjMyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDM3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDI1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNzgsXG4gICAgICAgIDAsXG4gICAgICAgIDg5LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMzQsXG4gICAgICAgIDMzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNzAsXG4gICAgICAgIDk4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTk0LFxuICAgICAgICA2MCxcbiAgICAgICAgMSxcbiAgICAgICAgMTksXG4gICAgICAgIDExMCxcbiAgICAgICAgNTAsXG4gICAgICAgIDQsXG4gICAgICAgIDgwLFxuICAgICAgICA0MixcbiAgICAgICAgMzAsXG4gICAgICAgIDMwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgODcsXG4gICAgICAgIDM0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgODdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDgwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDk4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAyMTksXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDU1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDExMixcbiAgICAgICAgMTEyLFxuICAgICAgICA3MixcbiAgICAgICAgMjI3LFxuICAgICAgICAxODAsXG4gICAgICAgIDE2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDM3LFxuICAgICAgICAzOCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxODAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxOTksXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDU1LFxuICAgICAgICAzMSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgODUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTM2LFxuICAgICAgICA5MCxcbiAgICAgICAgMjgsXG4gICAgICAgIDUwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMTksXG4gICAgICAgIDIxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMDksXG4gICAgICAgIDIzMSxcbiAgICAgICAgNDQsXG4gICAgICAgIDY3LFxuICAgICAgICA3NixcbiAgICAgICAgOCxcbiAgICAgICAgMjExLFxuICAgICAgICAyMjcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDMzLFxuICAgICAgICAxNDMsXG4gICAgICAgIDc0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDc1LFxuICAgICAgICAxNCxcbiAgICAgICAgMTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDk2LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlVPY0dEcy9QYmlvNHIvOVQ2enpTQ1gvWU1ScHE3SG15aVYxRXYwM3RlcUE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInlTdUhzVllwU3JDZG1ybmpUb3BVcEFcIixcbiAgXCJwaG9uZUlkXCI6IFwiMWE1YTU1NWQtYThiNS00MTFjLTk5YjgtZDQwZjgyOTU1NGFlXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE1MixcbiAgICAgIDExNixcbiAgICAgIDksXG4gICAgICAyNDQsXG4gICAgICA4MixcbiAgICAgIDExMyxcbiAgICAgIDg5LFxuICAgICAgNzUsXG4gICAgICAxNDMsXG4gICAgICA2MixcbiAgICAgIDYsXG4gICAgICA2NyxcbiAgICAgIDE5MixcbiAgICAgIDExMyxcbiAgICAgIDksXG4gICAgICAzNixcbiAgICAgIDIxMixcbiAgICAgIDUyLFxuICAgICAgODIsXG4gICAgICA0MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMjksXG4gICAgICAyMTYsXG4gICAgICAxMDAsXG4gICAgICAyMTUsXG4gICAgICAxNzUsXG4gICAgICA0OCxcbiAgICAgIDUsXG4gICAgICAxMzUsXG4gICAgICAxNTMsXG4gICAgICAxNDAsXG4gICAgICA2MixcbiAgICAgIDE5LFxuICAgICAgMjIyLFxuICAgICAgOTcsXG4gICAgICA1MCxcbiAgICAgIDE5MixcbiAgICAgIDE4MSxcbiAgICAgIDQyLFxuICAgICAgMTI4LFxuICAgICAgMjE0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlQ2VkZEWVA2XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTQ3NDA3MjQwNTE6NThAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJKb3JhbVwiLFxuICAgIFwibGlkXCI6IFwiNjc0MzEwNTM2ODQ3NjQ6NThAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSXFmcm84RUVPZncvTFlHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJLWHNsbWRhNmlKeTZmNlZtTHZPWmRuNWJMYjd6Y1QrRlY2MENTQzBMV1hvPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIklaRHdOYWxDcS9hVWdCSlRJRTh0M1htZE1nN1Z2N2lONVV0Mk9GcTYvTnBlUXREUkVNaTl3SGNtNjl4cmVkcTREQzFObENzTGZkTkV2Y0IzNFpOOEJ3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImQ3VXIwZXZRWHdtL0kvNzVxWlBkNnNQU1Vtd1BhVnJJVmo0ekliV0Q3djVJdVYwcnRueTZOUTUxNVFmZytJVGFkcDYxbFI0d0MwcWpCRTRicEwyK0NRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NDc0MDcyNDA1MTo1OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDEyMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI1OTA1MDE0XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "★彡UwemDev彡★",
  packname: process.env.PACK_NAME || "Sticker by",
  botname : process.env.BOT_NAME  || "UwemDev",
  ownername:process.env.OWNER_NAME|| "★彡UwemDev彡★",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
