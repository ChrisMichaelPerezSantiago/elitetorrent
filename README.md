<p align="center">
  <img src="./assets/img/logo.png" alt="EliteTorrent" />
</p>

  
<p align="center">
   The EliteTorrent API is a torrent provider of movies and series data from the elitetorrent.se website. It provides torrent and magnet urls, therefore you can find content from Spanish, Latin, and English with subtitles in Spanish. Everything for free.
</p>
<p align="center">
  <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />          
  <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  <img src="https://img.shields.io/badge/EliteTorrent-API-brightgreen.svg"/>
</p>



## 🚨 Project in premature state 🚨
Project started, and in development process. More information in the next days / weeks.


# 📖 API Documentation

## getSeries([page: number])

```json
[
  {
    "title": "El hundimiento de Japón: 2020 1×04",
    "poster": "https://www.elitetorrent.se/wp-content/uploads/portadas/1594431999-el-hundimiento-de-japon-2020-1x04.jpg",
    "lang": "Pelicula en Ingles Subtitulado VOSE",
    "resolution": "720p",
    "size": "484.57 MBs",
    "torrents": [
      {
        "torrent": "https://www.elitetorrent.se/wp-content/uploads/files/1594431931-El hundimiento de Japón_ 2020 1x04 [720p][Subtitulado][wWw.EliteTorrent.TO].torrent",
        "magnet": "magnet:?xt=urn:btih:1b4218b07021afe4cdd2ba4d0ab33c874f2f0a81&dn=El+hundimiento+de+Jap%C3%B3n_+2020+1x04+%5B720p%5D%5BSubtitulado%5D%5BwWw.EliteTorrent.TO%5D&xl=508105015&tr=udp://tracker.openbittorrent.com:80/announce&tr=udp://tracker.opentrackr.org:1337/announce",
        "torrentInfo": {
          "date": "09-07-2020",
          "seeds": 697,
          "clients": 1230
        }
      }
    ]
  },
  {
    "title": "El hundimiento de Japón: 2020 1×02",
    "poster": "https://www.elitetorrent.se/wp-content/uploads/portadas/1594431985-el-hundimiento-de-japon-2020-1x02.jpg",
    "lang": "Pelicula en Ingles Subtitulado VOSE",
    "resolution": "720p",
    "size": "606.19 MBs",
    "torrents": [
      {
        "torrent": "https://www.elitetorrent.se/wp-content/uploads/files/1594431920-El hundimiento de Japón_ 2020 1x02 [720p][Subtitulado][wWw.EliteTorrent.TO].torrent",
        "magnet": "magnet:?xt=urn:btih:a7d35740b635c833e2a08764c0be4944b8302dfb&dn=El+hundimiento+de+Jap%C3%B3n_+2020+1x02+%5B720p%5D%5BSubtitulado%5D%5BwWw.EliteTorrent.TO%5D&xl=635635932&tr=udp://tracker.openbittorrent.com:80/announce&tr=udp://tracker.opentrackr.org:1337/announce",
        "torrentInfo": {
          "date": "09-07-2020",
          "seeds": 1206,
          "clients": 819
        }
      }
    ]
  },
  // .....
]
```

## getMovies([page: number])

```json
[
  {
    "title": "El Hombre del Laberinto",
    "poster": "https://www.elitetorrent.se/wp-content/uploads/portadas/1594431141-el-hombre-del-laberinto.jpg",
    "lang": "Pelicula en Español Castellano",
    "resolution": "HDR",
    "size": "1.98 GBs",
    "torrents": [
      {
        "torrent": "https://www.elitetorrent.se/wp-content/uploads/files/1594431133-El hombre del laberinto [HDR][Castellano][wWw.EliteTorrent.TO].torrent",
        "magnet": "magnet:?xt=urn:btih:e9ea9f36f03871c48585f7450fbbb1bb265e331e&dn=El+hombre+del+laberinto+%5BHDR%5D%5BCastellano%5D%5BwWw.EliteTorrent.TO%5D&xl=2122652014&tr=udp://tracker.openbittorrent.com:80/announce&tr=udp://tracker.opentrackr.org:1337/announce",
        "torrentInfo": {
          "date": "30-10-2019",
          "seeds": 804,
          "clients": 236
        }
      }
    ]
  },
  {
    "title": "El Hombre del Laberinto",
    "poster": "https://www.elitetorrent.se/wp-content/uploads/portadas/1594431242-el-hombre-del-laberinto.jpg",
    "lang": "Pelicula en Ingles Subtitulado VOSE",
    "resolution": "HDR",
    "size": "2.32 GBs",
    "torrents": [
      {
        "torrent": "https://www.elitetorrent.se/wp-content/uploads/files/1594431227-El hombre del laberinto [HDR][Subtitulado][wWw.EliteTorrent.TO].torrent",
        "magnet": "magnet:?xt=urn:btih:2a9249a381c75baf9080ed6c625bc7a1d2f29d2a&dn=El+hombre+del+laberinto+%5BHDR%5D%5BSubtitulado%5D%5BwWw.EliteTorrent.TO%5D&xl=2494724958&tr=udp://tracker.openbittorrent.com:80/announce&tr=udp://tracker.opentrackr.org:1337/announce",
        "torrentInfo": {
          "date": "30-10-2019",
          "seeds": 930,
          "clients": 124
        }
      }
    ]
  },
  // .....
]
```

## getNewReleases([page: number])

```json
[
  {
    "title": "Viena and the Fantomes",
    "poster": "https://www.elitetorrent.se/wp-content/uploads/portadas/1593895455-viena-and-the-fantomes.jpg",
    "lang": "Pelicula en Español Latino",
    "resolution": "1080p",
    "size": "3.14 GBs",
    "torrents": [
      {
        "torrent": "https://www.elitetorrent.se/wp-content/uploads/files/1593895419-Viena and the Fantomes [1080p][Latino][wWw.EliteTorrent.TO].torrent",
        "magnet": "magnet:?xt=urn:btih:f564a3e14faf0599a454fdd7c2ff0034969fe30f&dn=Viena+and+the+Fantomes+%5B1080p%5D%5BLatino%5D%5BwWw.EliteTorrent.TO%5D&xl=3366753883&tr=udp://tracker.openbittorrent.com:80/announce&tr=udp://tracker.opentrackr.org:1337/announce",
        "torrentInfo": {
          "date": "30-06-2020",
          "seeds": 489,
          "clients": 400
        }
      }
    ]
  },
  {
    "title": "Crímenes imposibles",
    "poster": "https://www.elitetorrent.se/wp-content/uploads/portadas/1594412968-crimenes-imposibles.jpg",
    "lang": "Pelicula en Español Latino",
    "resolution": "1080p",
    "size": "1.25 GBs",
    "torrents": [
      {
        "torrent": "https://www.elitetorrent.se/wp-content/uploads/files/1594412949-Crímenes imposibles [1080p][Latino][wWw.EliteTorrent.TO].torrent",
        "magnet": "magnet:?xt=urn:btih:49219b96acb8a4fcc782a5631bd2c924fdb3614f&dn=Cr%C3%ADmenes+imposibles+%5B1080p%5D%5BLatino%5D%5BwWw.EliteTorrent.TO%5D&xl=1345045652&tr=udp://tracker.openbittorrent.com:80/announce&tr=udp://tracker.opentrackr.org:1337/announce",
        "torrentInfo": {
          "date": "31-10-2019",
          "seeds": 721,
          "clients": 848
        }
      }
    ]
  },
  // .....
]
```

## getMoviesHDRip([page: number])

```json
[
  {
    "title": "The Great War",
    "poster": "https://www.elitetorrent.se/wp-content/uploads/portadas/1580945633-the-great-war.jpg",
    "lang": "Pelicula en Ingles Subtitulado VOSE",
    "resolution": "HDRIP",
    "size": "2.22 GBs",
    "torrents": [
      {
        "torrent": "https://www.elitetorrent.se/wp-content/uploads/files/1580945637-The Great War [HDrip][Subtitulado][wWw.EliteTorrent.LI].torrent",
        "magnet": "magnet:?xt=urn:btih:c0e74cbb92bf3b903d304633c7c2bb2c16886734&dn=The+Great+War+%5BHDrip%5D%5BSubtitulado%5D%5BwWw.EliteTorrent.LI%5D&xl=2380341051&tr=udp://tracker.openbittorrent.com:80/announce&tr=udp://tracker.opentrackr.org:1337/announce",
        "torrentInfo": {
          "date": "07-04-2019",
          "seeds": 1187,
          "clients": 134
        }
      }
    ]
  },
  {
    "title": "Modo Avion",
    "poster": "https://www.elitetorrent.se/wp-content/uploads/portadas/1579992044-modo-avion.jpg",
    "lang": "Pelicula en Ingles Subtitulado VOSE",
    "resolution": "HDRIP",
    "size": "1.71 GBs",
    "torrents": [
      {
        "torrent": "https://www.elitetorrent.se/wp-content/uploads/files/1579992048-Modo Avion [HDRIP][Subtitulado][wWw.EliteTorrent.LI].torrent",
        "magnet": "magnet:?xt=urn:btih:4b99ef05132b68e8346fb9f3cbadb901c1c9de0e&dn=Modo+Avion+%5BHDRIP%5D%5BSubtitulado%5D%5BwWw.EliteTorrent.LI%5D&xl=1837733362&tr=udp://tracker.openbittorrent.com:80/announce&tr=udp://tracker.opentrackr.org:1337/announce",
        "torrentInfo": {
          "date": "23-01-2020",
          "seeds": 1100,
          "clients": 542
        }
      }
    ]
  },
  // .....
]
```

## getMoviesMicroHD([page: number])

```json
[
  {
    "title": "Los supersónicos y WWE: Robo-Wrestlemania",
    "poster": "https://www.elitetorrent.se/wp-content/uploads/portadas/los-supersa-sup3-nicos-y-wwe-robo-wrestlemania-microhd.jpg",
    "lang": "Pelicula en Español Castellano",
    "resolution": "---",
    "size": "2 GBs",
    "torrents": [
      {
        "torrent": "https://www.elitetorrent.se/wp-content/uploads/files/los-supersa-sup3-nicos-y-wwe-robo-wrestlemania-microhd.torrent",
        "magnet": "magnet:?xt=urn:btih:KV64U4LVAFVY435DJS62NOXYXAD4ARK4&dn=Los+supers%C3%B3nicos+y+WWE%3A+Robo-Wrestlemania+%28microHD%29+%28EliteTorrent.net%29&tr=udp%3A%2F%2Ftracker.openbittorrent.com%3A80%2Fannounce",
        "torrentInfo": {
          "date": "15-06-2017",
          "seeds": 12,
          "clients": 7
        }
      }
    ]
  },
  {
    "title": "Una historia de venganza",
    "poster": "https://www.elitetorrent.se/wp-content/uploads/portadas/una-historia-de-venganza-microhd-2.jpg",
    "lang": "Pelicula en Español Castellano",
    "resolution": "---",
    "size": "2 GBs",
    "torrents": [
      {
        "torrent": "https://www.elitetorrent.se/wp-content/uploads/files/una-historia-de-venganza-microhd-2.torrent",
        "magnet": "magnet:?xt=urn:btih:33OWY4OK46GCEGHXHUH3WTFX7W6M6JI2&dn=Una+historia+de+venganza+%28microHD%29+%28EliteTorrent.net%29&tr=udp%3A%2F%2Ftracker.openbittorrent.com%3A80%2Fannounce",
        "torrentInfo": {
          "date": "14-06-2017",
          "seeds": 12,
          "clients": 7
        }
      }
    ]
  },
  // .....
]
```

## getContentByGenre([genre: string, page: number])

|    genres              |
|------------------------|
| drama-5                |
| comedia-19             | 
| misterio-1             |
| crimen-3               |
| accion-3               |
| suspenso-2             |
| action-and-adventure-2 |
| sci-fi-and-fantasy-3   |
| aventura-9             |
| animacion-8            |
| romance-2              |


```js
(async() =>{
  const genre = 'drama-5';
  const page = 1
  const res = await getContentByGenre(genre, page);
})();
```


```json
[
  {
    "title": "El hundimiento de Japón: 2020 1×04",
    "poster": "https://www.elitetorrent.se/wp-content/uploads/portadas/1594431999-el-hundimiento-de-japon-2020-1x04.jpg",
    "lang": "Pelicula en Ingles Subtitulado VOSE",
    "resolution": "720p",
    "size": "484.57 MBs",
    "torrents": [
      {
        "torrent": "https://www.elitetorrent.se/wp-content/uploads/files/1594431931-El hundimiento de Japón_ 2020 1x04 [720p][Subtitulado][wWw.EliteTorrent.TO].torrent",
        "magnet": "magnet:?xt=urn:btih:1b4218b07021afe4cdd2ba4d0ab33c874f2f0a81&dn=El+hundimiento+de+Jap%C3%B3n_+2020+1x04+%5B720p%5D%5BSubtitulado%5D%5BwWw.EliteTorrent.TO%5D&xl=508105015&tr=udp://tracker.openbittorrent.com:80/announce&tr=udp://tracker.opentrackr.org:1337/announce",
        "torrentInfo": {
          "date": "09-07-2020",
          "seeds": 697,
          "clients": 1230
        }
      }
    ]
  },
  {
    "title": "El hundimiento de Japón: 2020 1×02",
    "poster": "https://www.elitetorrent.se/wp-content/uploads/portadas/1594431985-el-hundimiento-de-japon-2020-1x02.jpg",
    "lang": "Pelicula en Ingles Subtitulado VOSE",
    "resolution": "720p",
    "size": "606.19 MBs",
    "torrents": [
      {
        "torrent": "https://www.elitetorrent.se/wp-content/uploads/files/1594431920-El hundimiento de Japón_ 2020 1x02 [720p][Subtitulado][wWw.EliteTorrent.TO].torrent",
        "magnet": "magnet:?xt=urn:btih:a7d35740b635c833e2a08764c0be4944b8302dfb&dn=El+hundimiento+de+Jap%C3%B3n_+2020+1x02+%5B720p%5D%5BSubtitulado%5D%5BwWw.EliteTorrent.TO%5D&xl=635635932&tr=udp://tracker.openbittorrent.com:80/announce&tr=udp://tracker.opentrackr.org:1337/announce",
        "torrentInfo": {
          "date": "09-07-2020",
          "seeds": 1206,
          "clients": 819
        }
      }
    ]
  }, // .....
]
```

## getContentByQuality([quality: string, page: number])

|        quality      |
|---------------------|
| 1080p-10            |
| 720p-2              |

```js
(async() =>{
  const quality = '1080p-10';
  const page = 1;
  const res = await getContentByQuality(quality, page);
})();
```

```json
[
  {
    "title": "Mermaid Down",
    "poster": "https://www.elitetorrent.se/wp-content/uploads/portadas/1594430913-mermaid-down.jpg",
    "lang": "Pelicula en Español Latino",
    "resolution": "1080p",
    "size": "3.12 GBs",
    "torrents": [
      {
        "torrent": "https://www.elitetorrent.se/wp-content/uploads/files/1594430902-Mermaid Down 
[1080p][Latino][wWw.EliteTorrent.TO].torrent",
        "magnet": "magnet:?xt=urn:btih:331e4b34f2a25332b0a007ff6c6093f96ac9cdf6&dn=Mermaid+Down+%5B1080p%5D%5BLatino%5D%5BwWw.EliteTorrent.TO%5D&xl=3353458760&tr=udp://tracker.openbittorrent.com:80/announce&tr=udp://tracker.opentrackr.org:1337/announce",
        "torrentInfo": {
          "date": "15-10-2019",
          "seeds": 1103,
          "clients": 592
        }
      }
    ]
  },
  {
    "title": "La vieja guardia",
    "poster": "https://www.elitetorrent.se/wp-content/uploads/portadas/1594418392-la-vieja-guardia.jpg",
    "lang": "Pelicula en Español Latino",
    "resolution": "1080p",
    "size": "4.20 GBs",
    "torrents": [
      {
        "torrent": "https://www.elitetorrent.se/wp-content/uploads/files/1594418366-La vieja guardia [1080p][Latino][wWw.EliteTorrent.TO].torrent",
        "magnet": "magnet:?xt=urn:btih:11b4d10e83f2d7da356a22ff9544f27bb13790b1&dn=La+vieja+guardia+%5B1080p%5D%5BLatino%5D%5BwWw.EliteTorrent.TO%5D&xl=4511289628&tr=udp://tracker.openbittorrent.com:80/announce&tr=udp://tracker.opentrackr.org:1337/announce",
        "torrentInfo": {
          "date": "10-07-2020",
          "seeds": 323,
          "clients": 847
        }
      }
    ]
  },
  // .....
]
```

## **:handshake: Contributing**

- Fork it!
- Create your feature branch: `git checkout -b my-new-feature`
- Commit your changes: `git commit -am 'Add some feature'`
- Push to the branch: `git push origin my-new-feature`
- Submit a pull request

---

### **:busts_in_silhouette: Credits**

- [Chris Michael](https://github.com/ChrisMichaelPerezSantiago) (Project Leader, and Developer)

---

### **:anger: Troubleshootings**

This is just a personal project created for study / demonstration purpose and to simplify my working life, it may or may
not be a good fit for your project(s).

---

### **:heart: Show your support**

Please :star: this repository if you like it or this project helped you!\
Feel free to open issues or submit pull-requests to help me improving my work.


---


### **:robot: Author**

_*Chris Michael*_

> You can follow me on
[github](https://github.com/ChrisMichaelPerezSantiago)&nbsp;&middot;&nbsp;[twitter](https://twitter.com/Chris5855M)

---

Copyright © 2020 [EliteTorrent](https://github.com/ChrisMichaelPerezSantiago/elitetorrent).
