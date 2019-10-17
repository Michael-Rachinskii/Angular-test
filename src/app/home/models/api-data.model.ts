export interface IApiDataItem {
  snippet: {
    description: string;
    title: string;
    publishedAt: string;
    thumbnails: {
      high: {
        url: string;
      };
    };
  };
  id: {
    videoId: string;
  };
}
