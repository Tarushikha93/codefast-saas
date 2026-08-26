import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1> collect customer feedback and improve your business</h1>
      <div>
        create a feedback board in minuted, prioritize feature requests, and
        keep your customers in the loop.
      </div>

      <Link href="/dashboard">Go to Dashboard</Link>
    </main>
  );
}
