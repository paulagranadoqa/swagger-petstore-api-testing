describe('Swagger Petstore - User API Tests', () => {
  const baseUrl = 'https://petstore.swagger.io/v2';
  const uniqueId = Math.floor(Math.random() * 100000);
  const username = `paula_qa_${uniqueId}`;
  const password = 'Password123!';

  // 1. Create User with valid data (POST /user)
  it('Should create a new user with valid data (POST /user)', () => {
    cy.request({
      method: 'POST',
      url: `${baseUrl}/user`,
      body: {
        id: uniqueId,
        username: username,
        firstName: 'Paula',
        lastName: 'QA',
        email: `paula${uniqueId}@example.com`,
        password: password,
        phone: '123456789',
        userStatus: 1
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.message).to.eq(String(uniqueId));
    });
  });

  // 2. User Login with valid credentials (GET /user/login)
  it('Should log in the user with valid credentials (GET /user/login)', () => {
    cy.request({
      method: 'GET',
      url: `${baseUrl}/user/login`,
      qs: {
        username: username,
        password: password
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.message).to.include('logged in user session');
    });
  });

  // 3. Get user by username (GET /user/{username})
  it('Should get user by username (GET /user/{username})', () => {
    cy.request({
      method: 'GET',
      url: `${baseUrl}/user/${username}`
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.username).to.eq(username);
      expect(response.body.firstName).to.eq('Paula');
    });
  });

  // 4. Update user (PUT /user/{username})
  it('Should update user successfully (PUT /user/{username})', () => {
    cy.request({
      method: 'PUT',
      url: `${baseUrl}/user/${username}`,
      body: {
        id: uniqueId,
        username: username,
        firstName: 'Paula Updated',
        lastName: 'Automation',
        email: `paula_updated${uniqueId}@example.com`,
        password: password,
        phone: '987654321',
        userStatus: 1
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });

  // 5. Delete user by username (DELETE /user/{username})
  it('Should delete user by username (DELETE /user/{username})', () => {
    cy.request({
      method: 'DELETE',
      url: `${baseUrl}/user/${username}`
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.message).to.eq(username);
    });
  });

  // 6. Get user by username (Confirming deletion -> 404)
  it('Should return 404 when getting the deleted user by username', () => {
    cy.request({
      method: 'GET',
      url: `${baseUrl}/user/${username}`,
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(404);
      expect(response.body.message).to.eq('User not found');
    });
  });
});