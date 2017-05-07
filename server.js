let fs=require('fs')
module.exports=althea=>{
    althea.addPagemodule('/robots.txt',e=>{
        fs.createReadStream('plugins/althea-robots/robots.txt').pipe(
            e.response
        )
    })
}
