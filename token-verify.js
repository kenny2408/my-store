const jwt = require('jsonwebtoken');

const secret = 'myCat';
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInNjb3BlIjoiIiwicm9sZSI6ImN1c3RvbWVyIiwiaWF0IjoxNjM5NTExMjc1fQ.4u0iZZxUm3tLpY5X1i_Vb5HO21aojABcs_siUqFd2Vo'

function verifyToken(token, secret) {
  return jwt.verify(token, secret);
}

const payload = verifyToken(token, secret);
console.log(payload);
