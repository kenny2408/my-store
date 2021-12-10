const bcrypt = require('bcrypt');;

async function verifyPassword() {
  const myPassword = 'admin 123 .202';
  const hash = '$2b$10$acqv2gMkTkmXvlArRfOZGu/aSeP5tI9Nn2.EohAxRiVPU3kh/M0OO'
  const isMatch = await bcrypt.compare(myPassword, hash);
  console.log(isMatch);
}

verifyPassword();
