import ContentBox from '../component/contentBox';
import { pertanyaanAndJawabanApi } from '../util/api';

export default async function Jawaban() {
  const pertanyaanAndJawaban = await pertanyaanAndJawabanApi();
  return <ContentBox content={pertanyaanAndJawaban} />;
}
