import fs from'fs'
function Plugin(althea){
    althea.addPagemodule('/robots.txt',e=>{
        fs.createReadStream('plugins/robots/robots.txt').pipe(
            e.response
        )
    })
}
Plugin.prototype.end=function(){
}
Plugin.prototype.shutdownEnd=function(){
}
export default Plugin
