import usersManager from "../data/Users.manager.js"; 

const socketCb = async (socket) => {
    console.log(`socket connected id:`+ socket.id);

    socket.on("new user", async data=>{
        const id = await usersManager.creatOneUser(data)
        const allUser = await usersManager.readAllUsers()
        socket.emit("update users", allUser)
    })
    const allUser = await usersManager.readAllUsers()
    socket.emit("update users", allUser)
}

export default socketCb