

    it('apitest-get',()=>{
    cy.request('https://reqres.in/api/users?page=2').then((response)=>{
        expect(response.status).equal(200)

    })
    
    })

    
    it('apitest-post',()=>{
        let user=
        {
            "name": "arulpraba",
            "job": "tester"
        }
        cy.request('post','https://reqres.in/api/users',user).then((response)=>{
            expect(response.status).equal(201)
    
        })
        
        })

        it('apitest-put',()=>{
            let user=
            {
                "name": "arulprabakaran",
                "job": "tester engineer"
            }
            cy.request('put','https://reqres.in/api/users/2',user).then((response)=>{
                expect(response.status).equal(200)
                expect(response.body.name).equal('arulprabakaran')
        
            })
            
            })


            it('apitest-delete',()=>{
                let user=
                {
                    "name": "arulprabakaran",
                    "job": "tester engineer"
                }
                cy.request('delete','https://reqres.in/api/users/2').then((response)=>{
                    expect(response.status).equal(204)
                    
            
                })
                
                })
    

