export default function getQueryVariable(query, variable) {
  const vars = query.split('&');
  for (let i = 0; i < vars.length; i++) { // eslint-disable-line no-plusplus
    const pair = vars[i].split('=');
    if (pair[0] === variable) { return pair[1]; }
  }
  return (false);
}
