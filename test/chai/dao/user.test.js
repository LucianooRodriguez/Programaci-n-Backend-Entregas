const mongoose = require("mongoose")
const UsersMongoDao = require("../../../src/models/dao/mongo/users.mongo.dao")
const chai = require("chai")

const expect = chai.expect

const CONFIG = require("../../../src/config/config")

mongoose.connect(CONFIG.mongo.URI)

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
        expect(result).to.be.deep.equal([])
    })

    it("", async function() {
        let mockUser = {
            name: "chai test",
            email: "chaitest@gmail.com",
            password: "testpass",
            age: 40,
            rol: "user"
        }

        const result = await this.userDao.save(mockUser)

        expect(1).to.equal(1)
    })
})