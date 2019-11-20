// 歌手可能有一个或多个
import {format} from "./util";

function formatSinger(singers) {
    let arr = [];
    singers.forEach(item => {
        arr.push(item.name)
    })
    return arr.join('/')
}
export class Song {
    constructor({id, name, singer, album, image, duration, url}) {
        this.id = id;
        this.name = name;
        this.singer = singer;
        this.album = album;
        this.image = image;
        this.duration = duration;
        this.url = url
    }
}

//热门歌曲
export function createTopList(music) {
    return new Song({
        id: music.id,
        name: music.name,
        singer: music.ar.length > 0 && formatSinger(music.ar),
        album: music.al.name,
        image: music.al.picUrl,
        duration: music.dt / 1000,
        url: `https://music.163.com/song/media/outer/url?id=${music.id}.mp3`
    })
}

export function createPlayList(music) {
    return new Song({
        id: music.id,
        name: music.name,
        singer: music.artists.length > 0 && formatSinger(music.artists),
        album: music.album.name,
        image: music.album.picUrl || null,
        duration: music.duration / 1000,
        url: `https://music.163.com/song/media/outer/url?id=${music.id}.mp3`
    })
}

//格式化热门歌曲列表
export const formatTopSongs = function formatTopList(list) {
    let Songs = [];
    list.forEach(item => {
        if(item.id) {
            Songs.push(createTopList(item))
        }
    });
    return Songs
};

export const formatSongs = function formatPlayList(list) {
    let Songs = [];
    if(list === undefined) {
        return []
    }
    list.forEach(item => {
        if (item.id) {
            Songs.push(createPlayList(item))
        }
    });
    return Songs
};
