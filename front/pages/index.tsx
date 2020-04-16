import Link from 'next/link';
import { Header } from '../components/header';
export default function Index() {
  return (
    <div>
      <Header />
      <Link href="/login">Login</Link>
    </div>
  );
}
