import Link from "next/link";

export default function NotFound() {
  return (
    <main id="contenido" className="px-6 py-20">
      <p className="eyebrow">Página no encontrada</p>
      <h1 className="mt-4 font-serif text-4xl">Esta página no está en la estantería.</h1>
      <Link href="/" className="mt-8 inline-flex min-h-12 items-center rounded-xl bg-accent px-5 text-sm font-semibold text-white">Volver a mi biblioteca</Link>
    </main>
  );
}
