let state = {
    postData: [{text:"Привет", id:"1"}],
    friendsData: [{name:"Илон Маск", id:"2"},{name:"Бил Гейтц", id:"3"},{name:"Тим Кук", id:"4"},{name:"Стив Джобс", id:"5"}],
    messageData: [{text:"Привет", isMine:true},{text:"Привет", isMine:false},{text:"Пока", isMine:true},{text:"Пока", isMine:false},{text:"Пока", isMine:true},{text:"Пока", isMine:false},{text:"Пока", isMine:true},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:true},{text:"Пока", isMine:false},{text:"Пока", isMine:true}],
    musicData: [{singer:"Автор",title:"Название"}]
}

export const addMusic = (singer)=>{
    let newMusic = {singer:singer}
    state.musicData.push(newMusic)
}

export const addPost = (text)=>{
    let newPost = {text:text, id:"5"}
    state.postData.push(newPost)
}

export const addMes = (text)=>{
    let newMes = {text,isMine:true};
    state.messageData.push(newMes);
}

export default state