import { auth } from "../../auth";

export default async function UserAvatar() {
  const session = await auth();

  if (!session?.user) return null;

  const { name, email, image } = session.user;

  return (
    <div>
      <p>name: {name}</p>
      <p>email: {email}</p>
      <img src={image} alt={name} />
    </div>
  );
}
