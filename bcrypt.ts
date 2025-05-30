const password = await Bun.password.hash("Wellcome",{
  algorithm:"bcrypt",
  cost:10
})


export default password;
