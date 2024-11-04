import { Avatar, AvatarImage } from "@/components/ui/avatar";

export default function Navbar() {
  return (
    <nav className="mx-auto max-w-4xl bg-gray-800 p-4 text-orange-100">
      <div className="mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2 font-ubuntu">
          <span className="cursor-pointer text-xl font-medium hover:text-primary">
            Atila<span className="text-primary">Dev</span>
          </span>
        </div>
      </div>
    </nav>
  );
}
