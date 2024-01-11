import { fetctData } from '../util/api';
import HeroHeader from './heroHeader';

export default async function Header() {
  const global = await fetctData('global');

  return <HeroHeader global={global} />;
}
