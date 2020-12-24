/* 
函数
对象
向外暴露的是多个事件还是一个事件
*/
export default{
    saveInfo(value){
        window.localStorage.setItem("list",JSON.stringify(value))
    },
    readInfo(){
        return JSON.parse(window.localStorage.getItem("list")||'[]')
    }
}