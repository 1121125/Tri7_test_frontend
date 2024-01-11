import ContentBox from '../component/contentBox';
import { fetctData } from '../util/api';

export default async function Jawaban() {
  const pertanyaanAndJawaban = await fetctData('pertanyaanAndJawaban');
  return (
    <div className="px-3">
      <ContentBox content={pertanyaanAndJawaban} />
    </div>
  );
}
