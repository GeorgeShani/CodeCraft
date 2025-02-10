import { Blocks } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative border-t border-gray-800/50 mt-auto">
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-gray-900 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center text-gray-400">
            &copy; {new Date().getUTCFullYear()} CodeCraft. All Rights Reserved.
          </div>
          <div className="flex items-center gap-2 text-gray-400">
            <Blocks className="size-5" />
            <span>Engineered by developers, perfected for you.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
