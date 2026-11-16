describe('Swagger Petstore API Tests', () => {
  const baseUrl = 'https://petstore.swagger.io/v2';
  const petId = Math.floor(Math.random() * 100000); 

  it('Should create, retrieve, update, and delete a pet successfully (CRUD)', () => {
    
    // 1. POST - Create a new Pet
    cy.request({
      method: 'POST',
      url: `${baseUrl}/pet`,
      body: {
        id: petId,
        category: { id: 1, name: 'Dogs' },
        name: 'Rex Cypress',
        photoUrls: ['string'],
        tags: [{ id: 1, name: 'friendly' }],
        status: 'available'
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.id).to.eq(petId);
      expect(response.body.name).to.eq('Rex Cypress');
      expect(response.body.status).to.eq('available');
    });

    // 2. GET - Retrieve the created Pet by ID
    cy.request({
      method: 'GET',
      url: `${baseUrl}/pet/${petId}`
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.id).to.eq(petId);
      expect(response.body.name).to.eq('Rex Cypress');
    });

    // 3. PUT - Update the Pet status
    cy.request({
      method: 'PUT',
      url: `${baseUrl}/pet`,
      body: {
        id: petId,
        name: 'Rex Cypress',
        status: 'sold'
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.status).to.eq('sold');
    });

    // 4. DELETE - Delete the created Pet
    cy.request({
      method: 'DELETE',
      url: `${baseUrl}/pet/${petId}`
    }).then((response) => {
      expect(response.status).to.eq(200);
    });

  });
});