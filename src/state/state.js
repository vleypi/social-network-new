
// let state = {
//     postData: [{text:"Привет", id:"1"}],
//     friendsData: [{name:"Илон Маск", id:"2"},{name:"Бил Гейтц", id:"3"},{name:"Тим Кук", id:"4"},{name:"Стив Джобс", id:"5"}],
//     messageData: [{text:"Привет", isMine:true},{text:"Привет", isMine:false},{text:"Пока", isMine:true},{text:"Пока", isMine:false},{text:"Пока", isMine:true},{text:"Пока", isMine:false},{text:"Пока", isMine:true},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:true},{text:"Пока", isMine:false},{text:"Пока", isMine:true}],
//     musicData: [{singer:"Автор",title:"Название"}],
//     postText: "",
//     messageText: "dd",
// }

// export const onPostChange = (text)=>{
//     state.postText = text;
//     renderTree(state);
// }

// export const onMessageChange = (text)=>{
//     state.messageText = text;
//     renderTree(state)
// }

// export const addMusic = (singer)=>{
//     let newMusic = {singer:singer}
//     state.musicData.push(newMusic)
//     renderTree(state);
// }

// export const addPost = (text)=>{
//     let newPost = {text:text, id:"5"}
//     state.postData.unshift(newPost)
//     renderTree(state);
// }

// export const addMes = (text)=>{
//     let newMes = {text,isMine:true};
//     state.messageData.push(newMes);
//     renderTree(state);
// }

// export let subscribe = (observer)=>{
//     renderTree = observer
// }

// let renderTree = ()=>{
//     console.log('state change')
// }

const store = {
    state: {
        postData: [{text:"Привет", id:"1"}],
        friendsData: [{name:"Илон Маск", id:"2"},{name:"Бил Гейтц", id:"3"},{name:"Тим Кук", id:"4"},{name:"Стив Джобс", id:"5"}],
        messageData: [{text:"Привет", isMine:true},{text:"Привет", isMine:false},{text:"Пока", isMine:true},{text:"Пока", isMine:false},{text:"Пока", isMine:true},{text:"Пока", isMine:false},{text:"Пока", isMine:true},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:false},{text:"Пока", isMine:true},{text:"Пока", isMine:false},{text:"Пока", isMine:true}],
        musicData: [{singer:"Автор",title:"Название"}],
        postText: "",
        messageText: "",
    },
    onPostChange(text){
        console.log(this)
        this.state.postText = text;
        this.renderTree(this.state);
    },
    onMessageChange(text){
        this.state.messageText = text;
        this.renderTree(this.state)
    },
    addMusic(singer){
        let newMusic = {singer:singer}
        this.state.musicData.push(newMusic)
        this.renderTree(this.state);
    },
    addPost(text){
        let newPost = {text:text, id:"5"}
        this.state.postData.unshift(newPost)
        this.renderTree(this.state);
    },
    addMes(text){
        let newMes = {text,isMine:true};
        this.state.messageData.push(newMes);
        this.renderTree(this.state);
    },
    subscribe(observer){
        this.renderTree = observer
    },
    renderTree (){
        console.log('state change')
    },
}

export default store