const bcrypt = require('bcrypt');;

async function verifyPassword() {
  const myPassword = 'admin 123 .202';
  const hash = '$2b$10$9yLCgLBOM1w1LjYglr2.JOmcM9IAwxJ42eoZN2i6/rbjqJEuAIwGG'
  const isMatch = await bcrypt.compare(myPassword, hash);
  console.log(isMatch);
}

verifyPassword();
