describe('Swagger Petstore - Store API Tests', () => {
  const baseUrl = 'https://petstore.swagger.io/v2';
  const orderId = Math.floor(Math.random() * 10) + 1;

  // 1. POST - Place a new order
  it('Should place a new order successfully (POST)', () => {
    cy.request({
      method: 'POST',
      url: `${baseUrl}/store/order`,
      body: {
        id: orderId,
        petId: 1,
        quantity: 2,
        shipDate: new Date().toISOString(),
        status: 'placed',
        complete: true
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.id).to.eq(orderId);
      expect(response.body.status).to.eq('placed');
    });
  });

  // 2. GET - Find order by ID
  it('Should find the order by ID (GET)', () => {
    cy.request({
      method: 'POST',
      url: `${baseUrl}/store/order`,
      body: {
        id: orderId,
        petId: 1,
        quantity: 1,
        status: 'placed'
      }
    }).then(() => {
      cy.request({
        method: 'GET',
        url: `${baseUrl}/store/order/${orderId}`
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.id).to.eq(orderId);
      });
    });
  });

  // 3. GET - Find order with invalid number (Negative Test)
  it('Should return 404 when searching with an invalid/non-existent order number', () => {
    cy.request({
      method: 'GET',
      url: `${baseUrl}/store/order/999999999`,
      failOnStatusCode: false 
    }).then((response) => {
      expect(response.status).to.eq(404);
      expect(response.body.message).to.eq('Order not found');
    });
  });

  // 4. POST - Create order with invalid pet id (Negative Test)
  it('Should handle or return error when creating an order with an invalid pet ID', () => {
    cy.request({
      method: 'POST',
      url: `${baseUrl}/store/order`,
      failOnStatusCode: false, 
      body: {
        id: orderId + 50,
        petId: "pet_invalido_texto", 
        quantity: 1,
        status: 'placed'
      }
    }).then((response) => {
      expect(response.status).to.be.oneOf([400, 404, 500]);
    });
  });
});