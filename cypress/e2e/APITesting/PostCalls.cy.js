describe("api testing",()=>{

    it("Approach1- Hard coded json object", ()=>{

        const requestBody={
            name: "Muhammad Asad",
            job: "leader"
        }
        cy.request({
            method: 'POST',
            url: 'https://reqres.in/api/users',
            // We have already created the body so we will simply pass it
            body: requestBody
        })
        // to Capture the response we will use .then
        .then((resoponse)=>{
            expect(resoponse.status).to.eq(201)
            expect(resoponse.body.name).to.eq("Muhammad Asad")
            expect(resoponse.body.job).to.eq("leader")
        }) 
    })

})