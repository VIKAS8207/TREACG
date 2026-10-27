import Link from "next/link";

export default function IirsFooter() {
  return (
    <footer className="bg-brand-green py-8 text-center text-white">
      <p className="text-lg font-semibold">Think Rice... Think India...</p>
      <p className="mt-1 text-sm text-white/70">
        <Link href="/" className="hover:text-amber-200">TREACG</Link> · IIRS 2027
      </p>
    </footer>
  );
}
