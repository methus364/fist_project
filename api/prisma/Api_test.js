const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function main() {
  const User = await prisma.Customer.create({
        data:{
            name:"T2",
            email:"T2@gmail.com",
            address:"chinese"
        }
  })
  console.log(User)
}


main()
.then(async () => {
  await prisma.$disconnect()
})
.catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
  
 async function allcus() {
      const allUser = await prisma.Customer.findMany({
            include:{
              email:true
            }
      })
      console.log(allUser)
 }
  allcus()
    .then(async () => {
      await prisma.$disconnect()
    })
    .catch(async (e) => {
      console.error(e)
      await prisma.$disconnect()
      process.exit(1)
    })
