export const fetchData = async (apiPage: string) => {
  // await delay(300);
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}api/${apiPage}`)
      .then((res) => res.json())
      .catch((err) => console.log(err));
    return response;
  } catch (error: any) {
    console.log(error.message);
  }
};