import { signup } from '@/app/login/actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';

export default function SignupPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center">Sign Up</h1>
        <form className="space-y-4">
          <div>
            <Label htmlFor="email">Email:</Label>
            <Input id="email" name="email" type="email" required />
          </div>
          <div>
            <Label htmlFor="password">Password:</Label>
            <Input id="password" name="password" type="password" required />
          </div>
          <div>
            <Label htmlFor="confirmPassword">Confirm Password:</Label>
            <Input id="confirmPassword" name="confirmPassword" type="password" required />
          </div>
          <Button formAction={signup} className="w-full">Sign up</Button>
        </form>
        <p className="text-center">
          Already have an account? <Link href="/login" className="text-blue-500">Log in</Link>
        </p>
      </div>
    </div>
  );
} 