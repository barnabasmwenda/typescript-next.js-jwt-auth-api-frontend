import Link from "next/link";
import "./style.css";

export default function Home() {
  return (
    <main className="wrapper-padding">
      <section className="hero d-flex align-items-center justify-content-center text-center content-wrapper">
        <h1>Welcome to Achieve it</h1>
        <p className="mt-3">
          Organize your tasks efficiently, stay productive and achieve it!
        </p>
        <Link href="/sign-up" className="primary-cta mt-3">
          Get started
        </Link>
      </section>
    </main>
  );
}
