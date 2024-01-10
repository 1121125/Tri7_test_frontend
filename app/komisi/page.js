import { komisiApi } from '../util/api';
import ContentBox from './contentBox';

export default async function Komisi() {
  const komisi = await komisiApi();
  console.log(komisi);
  return <ContentBox komisi={komisi} />;
}
