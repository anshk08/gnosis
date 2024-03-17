import { Button } from "@/components/ui/button";
import Link from "next/link";

const LandingPage = () => {
  return (
    <div>
      <p>Landing Page (Unprotected)</p>
      <div>
        <Link href="/dashboard">
          <Button>Login</Button>
        </Link>
        <Link href="/dashboard">
          <Button>Register</Button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
