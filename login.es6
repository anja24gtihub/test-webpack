let login = (username, password) => {
    if(username !== "admin" || password !== "neki") {
        console.log("incorrect login");
    }
}

login("admin", "neki");