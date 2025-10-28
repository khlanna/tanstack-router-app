import { Link } from "@tanstack/react-router";

export default function Nav() {
  return (
    <div className="flex gap-2 mb-8  bg-blue-400 p-2">
      <Link to="/settings/payments" className="[&.active]:font-bold  ">
        Payments
      </Link>
      <Link to="/settings/profile" className="[&.active]:font-bold ">
        Profile
      </Link>
      <Link to="/settings/password" className="[&.active]:font-bold  ">
        Password
      </Link>
    </div>
  );
}
