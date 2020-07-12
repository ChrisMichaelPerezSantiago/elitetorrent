export interface URLOptions{
  uri: string;
  method: string;
};

export interface TorrentFile{
  torrent: string;
  magnet: string;
};

export interface Serie{
  title: string;
  poster: string;
  lang: string;
  resolution: string;
  size: string;
  torrents: Array<TorrentFile>;
};

export interface Movie{
  title: string;
  poster: string;
  lang: string;
  resolution: string;
  size: string;
  torrents: Array<TorrentFile>;
};

export interface NewReleases{
  title: string;
  poster: string;
  lang: string;
  resolution: string;
  size: string;
  torrents: Array<TorrentFile>;
};

export interface MoviesHDRip{
  title: string;
  poster: string;
  lang: string;
  resolution: string;
  size: string;
  torrents: Array<TorrentFile>;
};

export interface MovieMicroHD{
  title: string;
  poster: string;
  lang: string;
  resolution: string;
  size: string;
  torrents: Array<TorrentFile>;
};

