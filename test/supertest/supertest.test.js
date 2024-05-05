const chai = require('chai')
const supertest = require("supertest")
const mongoose = require('mongoose')
const CONFIG = require('../../src/config/config')

const expect = chai.expect
const requester = supertest('http://localhost:8080')

describe('TEST DE PRODUCTOS', () => {

    before(async () => {
        mongoose.connect(CONFIG.mongo.URI)
    })


    it('prueba -- [GET] /api/products', async () => {

        const result = await requester.get('/api/products')

        expect(result.status).to.be.eql(200)
    })

    it('prueba -- [GET] /api/products/:pid', async () => {

        id = '64b5a5b5a3398e7b8ba013d5'

        const result = await requester.get('/api/products/' + id)

        expect(result.status).to.be.eql(200)
    })

    it('prueba -- [POST] /api/products/', async () => {

        const mockProduct = {
            title: "test product",
            description: "test desc",
            price: 34567.67,
            thumbnail: [""],
            code: "sedfgh345678",
            stock: 10,
            category: "accesorios",
            owner: "test"
        }

        const result = await requester.post('/api/products')
            .field('title', mockProduct.title)
            .field('description', mockProduct.description)
            .field('price', mockProduct.price)
            .field('thumbnail', mockProduct.thumbnail)
            .field('code', mockProduct.code)
            .field('stock', mockProduct.stock)
            .field('category', mockProduct.category)
            .field('owner', mockProduct.owner)

        console.log(result._body)
        expect(result._body.payload).to.have.property("_id")
        expect(result.status).to.be.eql(200)
    })

    after(async () => {
        mongoose.connection.close()
    })
})

describe('TEST DE USUARIOS', () => {

    before(async () => {
        mongoose.connect(CONFIG.mongo.URI)
    })


    it('prueba -- [GET] /api/users', async () => {

        const result = await requester.get('/api/users')

        expect(result.status).to.be.eql(200)
    })

    it('prueba -- [GET] /api/users/:pid', async () => {

        id = '64c2ba2dc6e620e1c91a59f0'

        const result = await requester.get('/api/users/' + id)

        expect(result.status).to.be.eql(200)
    })

    it('prueba -- [POST] /api/users/', async () => {

        const mockUser = {
            name: "test user",
            email: "test@coder.com",
            password: "testpass",
            age: 99,
            rol: "user",
        }

        const result = await requester.post('/api/users')
            .field('name', mockUser.name)
            .field('email', mockUser.email)
            .field('password', mockUser.password)
            .field('age', mockUser.age)
            .field('rol', mockUser.rol)
        expect(result.status).to.be.eql(200)
    })

    after(async () => {
        mongoose.connection.close()
    })
})