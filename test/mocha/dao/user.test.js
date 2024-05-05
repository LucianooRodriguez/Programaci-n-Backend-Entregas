const mongoose = require("mongoose")
const UsersMongoDao = require("../../../src/models/dao/mongo/users.mongo.dao")
const Assert = require("assert")
const CONFIG = require("../../../src/config/config")


const assert = Assert.strict

describe("",()=>{
    
    before ( function() {
        this.userDao = new UsersMongoDao()
        mongoose.connect(CONFIG.mongo.URI)
    })

    beforeEach(function(){
        mongoose.connection.collection('users').find({})
    })

    after(function(){
        mongoose.connection.close()
    })
    
    it("", async function (){

        console.log(this.userDao)

        const result = await this.userDao.getAll()
        console.log(result)
        //assert.ok()
    })

    it("", async function() {
        let mockUser = {
            name: "moch test",
            email: "mochtest@gmail.com",
            password: "testpass",
            age: 40,
            rol: "user"
        }

        const result = await this.userDao.save(mockUser)
        assert.ok(result)
    })
})