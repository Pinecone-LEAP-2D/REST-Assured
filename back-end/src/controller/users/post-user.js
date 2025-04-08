export const createAccount = async (req, res) => {
    const { email, username } = req.body;
    const user = await prisma.user.create({
      data: { email, username },
    });
    res.json(user);
  }