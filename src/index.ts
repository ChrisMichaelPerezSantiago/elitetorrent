import { load } from 'cheerio'
import { req } from './utils/index';
import { BASE_URL } from './urls/index';
import { TypeSN, TypeNN } from './types';
import { TorrentFile, Serie, Movie, NewReleases, MoviesHDRip, MovieMicroHD, TorrentInfo, Genre } from './interfaces';



export const getSeries = async(page: number): Promise<Serie[]> =>{
  const res = await req(`${BASE_URL}/series-20/page/${page}/`);
  const $ = load(res);

  const _series: Array<Serie> = $('body div#cuerpo div#principal ul li')
    .map((_index: number, element: CheerioElement) => new Promise(async(resolve, reject) =>{
      try{
        const $element = $(element);
        const id: TypeSN = $element.find('div.meta a').attr('href');
        const title: TypeSN = $element.find('div.meta a.nombre').text();
        let poster: TypeSN = $element.find('div.imagen a img.brighten').attr('data-src');
        if(poster !== null && poster.startsWith('/')){
          poster = `${BASE_URL}` + $element.find('div.imagen a img.brighten').attr('data-src');
        }
        const lang = $element.find('div.imagen span#idiomacio i img').attr('alt');
        const resolution: TypeSN = $element.find('div.imagen span.marca').eq(1).text();
        const size: TypeSN = $element.find('div.imagen div.voto1 span.dig1').text();
        let torrents = await getTorrent(id);

        resolve({
          title: title,
          poster: poster,
          lang: lang,
          resolution: resolution,
          size: size,
          torrents: torrents,
        });

      }catch(err){
        reject(err);
      }
  })).get();

  return Promise.all(_series);
}

export const getMovies = async(page: number): Promise<Movie[]> =>{
  const res = await req(`${BASE_URL}/peliculas-16/page/${page}/`);
  const $ = load(res);

  const _movies: Array<Movie> = $('body div#cuerpo div#principal ul li')
    .map((_index: number, element: CheerioElement) => new Promise(async(resolve, reject) =>{
      try{
        const $element = $(element);
        const id: TypeSN = $element.find('div.meta a').attr('href');
        const title: TypeSN = $element.find('div.meta a.nombre').text();
        let poster: TypeSN = $element.find('div.imagen a img.brighten').attr('data-src');
        if(poster !== null && poster.startsWith('/')){
          poster = `${BASE_URL}` + $element.find('div.imagen a img.brighten').attr('data-src');
        }
        const lang = $element.find('div.imagen span#idiomacio i img').attr('alt');
        const resolution: TypeSN = $element.find('div.imagen span.marca').eq(1).text();
        const size: TypeSN = $element.find('div.imagen div.voto1 span.dig1').text();
        let torrents = await getTorrent(id);

        resolve({
          title: title,
          poster: poster,
          lang: lang,
          resolution: resolution,
          size: size,
          torrents: torrents,
        });

      }catch(err){
        reject(err);
      }
  })).get();

  return Promise.all(_movies);
}

export const getNewReleases = async(page: number): Promise<NewReleases[]> =>{
  const res = await req(`${BASE_URL}/estrenos-23/page/${page}`);
  const $ = load(res);

  const _releases: Array<NewReleases> = $('body div#cuerpo div#principal ul li')
    .map((_index: number, element: CheerioElement) => new Promise(async(resolve, reject) =>{
      try{
        const $element = $(element);
        const id: TypeSN = $element.find('div.meta a').attr('href');
        const title: TypeSN = $element.find('div.meta a.nombre').text();
        let poster: TypeSN = $element.find('div.imagen a img.brighten').attr('data-src');
        if(poster && poster.startsWith('/')){
          poster = `${BASE_URL}` + $element.find('div.imagen a img.brighten').attr('data-src');
        }
        const lang = $element.find('div.imagen span#idiomacio i img').attr('alt');
        const resolution: TypeSN = $element.find('div.imagen span.marca').eq(1).text();
        const size: TypeSN = $element.find('div.imagen div.voto1 span.dig1').text();
        let torrents = await getTorrent(id);
        
        resolve({
          title: title,
          poster: poster,
          lang: lang,
          resolution: resolution,
          size: size,
          torrents: torrents,
        });

      }catch(err){
        reject(err);
      }
  })).get();

  return Promise.all(_releases);
}

export const getMoviesHDRip = async(page: number): Promise<MoviesHDRip[]> =>{
  const res = await req(`${BASE_URL}/peliculas-hdrip-11/page/${page}`);
  const $ = load(res);

  const _movies: Array<MoviesHDRip> = $('body div#cuerpo div#principal ul li')
    .map((_index: number, element: CheerioElement) => new Promise(async(resolve, reject) =>{
      try{
        const $element = $(element);
        const id: TypeSN = $element.find('div.meta a').attr('href');
        const title: TypeSN = $element.find('div.meta a.nombre').text();
        let poster: TypeSN = $element.find('div.imagen a img.brighten').attr('data-src');
        if(poster && poster.startsWith('/')){
          poster = `${BASE_URL}` + $element.find('div.imagen a img.brighten').attr('data-src');
        }
        const lang = $element.find('div.imagen span#idiomacio i img').attr('alt');
        const resolution: TypeSN = $element.find('div.imagen span.marca').eq(1).text();
        const size: TypeSN = $element.find('div.imagen div.voto1 span.dig1').text();
        let torrents = await getTorrent(id);
        
        resolve({
          title: title,
          poster: poster,
          lang: lang,
          resolution: resolution,
          size: size,
          torrents: torrents,
        });

      }catch(err){
        reject(err);
      }
  })).get();

  return Promise.all(_movies);
}

export const getMoviesMicroHD = async(page: number): Promise<MovieMicroHD[]> =>{
  const res = await req(`${BASE_URL}/peliculas-microhd-9/page/${page}`);
  const $ = load(res);

  const _movies: Array<MovieMicroHD> = $('body div#cuerpo div#principal ul li')
    .map((_index: number, element: CheerioElement) => new Promise(async(resolve, reject) =>{
      try{
        const $element = $(element);
        const id: TypeSN = $element.find('div.meta a').attr('href');
        const title: TypeSN = $element.find('div.meta a.nombre').text().trim();
        let poster: TypeSN = $element.find('div.imagen a img.brighten').attr('data-src');
        if(poster && poster.startsWith('/')){
          poster = `${BASE_URL}` + $element.find('div.imagen a img.brighten').attr('data-src');
        }
        const lang = $element.find('div.imagen span#idiomacio i img').attr('alt');
        const resolution: TypeSN = $element.find('div.imagen span.marca').eq(1).text();
        const size: TypeSN = $element.find('div.imagen div.voto1 span.dig1').text();
        let torrents = await getTorrent(id);
        
        resolve({
          title: title,
          poster: poster,
          lang: lang,
          resolution: resolution,
          size: size,
          torrents: torrents,
        });

      }catch(err){
        reject(err);
      }
  })).get();

  return Promise.all(_movies);
}

export const getContentByGenre = async(genre: string, page: number): Promise<Genre[]> =>{
  const res = await req(`${BASE_URL}/genero/${genre}/page/${page}`);
  const $ = load(res);

  const _content: Array<Genre> = $('body div#cuerpo div#principal ul li')
    .map((_index: number, element: CheerioElement) => new Promise(async(resolve, reject) =>{
      try{
        const $element = $(element);
        const id: TypeSN = $element.find('div.meta a').attr('href');
        const title: TypeSN = $element.find('div.meta a.nombre').text();
        let poster: TypeSN = $element.find('div.imagen a img.brighten').attr('data-src');
        if(poster !== null && poster.startsWith('/')){
          poster = `${BASE_URL}` + $element.find('div.imagen a img.brighten').attr('data-src');
        }
        const lang = $element.find('div.imagen span#idiomacio i img').attr('alt');
        const resolution: TypeSN = $element.find('div.imagen span.marca').eq(1).text();
        const size: TypeSN = $element.find('div.imagen div.voto1 span.dig1').text();
        let torrents = await getTorrent(id);

        resolve({
          title: title,
          poster: poster,
          lang: lang,
          resolution: resolution,
          size: size,
          torrents: torrents,
        });

      }catch(err){
        reject(err);
      }
  })).get();

  return Promise.all(_content);
}

const getTorrent = async(url: string): Promise<Array<TorrentFile>> =>{
  const res = await req(`${url}`);
  const $ = load(res);
  const _files: Array<TorrentFile> = [];


  $('body div#cuerpo div#principal').map((_index: number, element: CheerioElement) => 
    new Promise((response, reject) =>{
      try{
        const $element = $(element);
        let _date: TypeSN = $element.find('div.secc-ppal span').eq(0).text();
        let date: TypeSN = "";
        if(_date !== null && _date.includes(':')){
          date = _date.split(':')[1].trim();
        }
        const numbers = $element.find('div.secc-der div.infotorrent div.ppal').text().match(/\d+/g);
        let seeds: TypeNN;
        let clients: TypeNN;
          
        if(Array.isArray(numbers) && numbers.length > 0){
          seeds = parseInt(numbers[0], 10);
          clients = parseInt(numbers[1], 10);
        }
        let torrent: TypeSN = $element.find('div.ficha_descarga_opciones div.enlace_descarga a').eq(0).attr('href');
        if(torrent !== null && torrent.startsWith('/')){
          torrent = `${BASE_URL}` + $element.find('div.ficha_descarga_opciones div.enlace_descarga a').eq(0).attr('href');
        }
        const magnet: TypeSN = $element.find('div.ficha_descarga_opciones div.enlace_descarga a').eq(1).attr('href');
        const torrentInfo: TorrentInfo = {
          date: date,
          seeds: seeds,
          clients: clients
        }
        _files.push({
          torrent: torrent,
          magnet: magnet,
          torrentInfo: torrentInfo
        });

        response(_files)
      }catch(err){
        reject(err)
      }
    }
  )).get();

  return await Promise.all(_files);
}