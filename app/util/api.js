export async function globalApi() {
  const response = await fetch(
    'https://super7tech.com/web_developer_exam_sr/api'
  );
  const data = await response.json();
  // console.log(data);
  const response2 = await fetch(data.routes.global);
  const global = await response2.json();
  return global;
}

export async function homeApi() {
  const response = await fetch(
    'https://super7tech.com/web_developer_exam_sr/api'
  );
  const data = await response.json();
  const response2 = await fetch(data.routes.homePage);
  const home = await response2.json();
  return home;
}

export async function komisiApi() {
  const response = await fetch(
    'https://super7tech.com/web_developer_exam_sr/api'
  );
  const data = await response.json();
  const response2 = await fetch(data.routes.komisi);
  const komisi = await response2.json();
  return komisi;
}
