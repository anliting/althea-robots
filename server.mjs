import fs from'fs'
export default althea=>{
    althea.addPagemodule('/robots.txt',e=>{
        fs.createReadStream('plugins/robots/robots.txt').pipe(
            e.response
        )
    })
}
