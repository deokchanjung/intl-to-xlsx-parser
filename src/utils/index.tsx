// import XLSX from 'xlsx';

const readJSON = (event: ProgressEvent<FileReader>): object => {
  if (!event.target) {
    throw new Error(
      '파일을 읽는 도중 에러가 발생하였습니다.\n페이지를 새로고침 한 후 다시 시도해주세요.'
    );
  }

  const rawJSON: string = event.target.result as string;

  try {
    if (!rawJSON) {
      throw new Error(
        '파일 내용이 없는 json 파일입니다. \n내용 확인후 다시 첨부해주세요.'
      );
    }
    const json = rawJSON ? JSON.parse(rawJSON as string) : null;
    console.log(json);
    return json;
  } catch (error) {
    throw new Error(
      '파일 형식이 잘못되었습니다. \njson 파일이 맞는지 확인후 다시 첨부해주세요.'
    );
  }
};

const getDepth = (json: object): number => {
  let depth: number = 0;

  const explorer = (target: object): void => {
    depth++;

    Object.keys(target).forEach((key: string): void => {
      if (typeof key === 'string') {
        return;
      }
      explorer(target[key]);
    });
  };

  explorer(json);
  return depth;
};

export default {
  readJSON,
  getDepth
};
