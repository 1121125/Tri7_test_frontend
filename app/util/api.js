const baseApiUrl = 'https://super7tech.com/web_developer_exam_sr/api';

export async function fetctData(target) {
  const route = await fetch(baseApiUrl);
  const routeData = await route.json();
  // console.log(data);
  const targetData = await fetch(routeData.routes[target]);
  const data = await targetData.json();
  return data;
}
