import { fetctData } from '../util/api';
import ContentBox from '../component/contentBox';

export default async function Page() {
  const komisi = await fetctData('komisi');
  // console.log(komisi);
  return (
    <div className="px-3">
      <ContentBox content={komisi} />
    </div>
  );
}
