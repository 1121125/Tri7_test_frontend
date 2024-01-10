import Link from 'next/link';
import { globalApi } from '../util/api';
import Navbar from './navbar';
import HeroHeader from './heroHeader';

export default async function Header() {
  const global = await globalApi();

  return <HeroHeader global={global} />;
}
