const axios=require("axios")
const fs=require("fs")
var url=""
var reg=/<a href="(.*?)">/igm
async function main(){
let res=await axios.get("https://wdbible.app/app")
url=res.data.match(reg)[15].replace(reg, "$1")
fs.writeFileSync("url.txt",url)
}
main()
