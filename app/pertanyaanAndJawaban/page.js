import ContentBox from '../component/contentBox';
import { pertanyaanAndJawabanApi } from '../util/api';

export default async function Jawaban() {
  const pertanyaanAndJawaban = await pertanyaanAndJawabanApi();
  // console.log(pertanyaanAndJawaban);
  return (
    <div className="px-3">
      <ContentBox content={pertanyaanAndJawaban} />
    </div>
  );
}
