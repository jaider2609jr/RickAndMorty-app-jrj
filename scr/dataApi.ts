
export const getData = async (URL: any) => await fetch(URL).then(res => res.json())

