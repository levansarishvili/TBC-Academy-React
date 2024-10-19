import LoginForm from "./LoginForm";

export default function LoginPage() {
  async function LoginUser() {
    try {
      const res = fetch("https://dummyjson.com/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: "emilys",
          password: "emilyspass",
          expiresInMins: 30, // optional, defaults to 60
        }),
      });
    } catch (err) {
      return (
        <div>
          <p>⚠️ User not found</p>
        </div>
      );
    }

    const data = await res.json();
    console.log(data);
  }

  return <LoginForm />;
}
