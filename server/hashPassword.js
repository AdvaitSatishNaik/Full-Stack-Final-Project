import bcrypt from "bcryptjs";

const createHash = async () => {
  const password = "hilary@123";   // Change this to whatever password you want

  const hashedPassword = await bcrypt.hash(password, 10);

  console.log(hashedPassword);
};

createHash();