import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-6">
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-soft text-center">
        <h1 className="text-2xl font-bold text-slate-900">Donghoon Lee</h1>
        <p className="mt-3 text-slate-600">Resume Website</p>
        <div className="mt-6 flex justify-center gap-3">
          <Link
            href="/ko/"
            className="rounded-full bg-slate-900 px-4 py-2 text-white"
          >
            KO
          </Link>
          <Link
            href="/en/"
            className="rounded-full border border-slate-300 px-4 py-2"
          >
            EN
          </Link>
          <Link
            href="/ja/"
            className="rounded-full border border-slate-300 px-4 py-2"
          >
            JA
          </Link>
        </div>
      </div>
    </main>
  );
}
