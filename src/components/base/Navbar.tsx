import { Avatar, AvatarImage } from "@/components/ui/avatar";

export default function Navbar() {
  return (
    <nav className="mx-auto max-w-4xl bg-gray-800 p-4 text-orange-100">
      <div className="mx-auto flex items-center justify-between">
        <div
          className="font-ubuntu flex items-center space-x-2"
          aria-label="Welcome to AtilaDev"
        >
          <Avatar>
            <AvatarImage
              src="https://github.com/AtilaDev.png"
              aria-hidden="true"
              role="img"
            />
          </Avatar>
          <span className="text-xl font-medium">
            Atila<span className="text-orange-400">Dev</span>
          </span>
        </div>
      </div>
    </nav>
  );
}
