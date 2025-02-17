"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.getSongbyID = exports.getSongsByYear = exports.getSongbyTitle = exports.getSongbyArtist = exports.getSongbyGenera = exports.getSongByAlbum = exports.addSong = void 0;
var dataSource_1 = require("../dataSource");
var Song_1 = require("../entities/Song");
var songRepository = dataSource_1.AppDataSource.getRepository(Song_1.Song);
function addSong(songTitle, artist, album, genera, releaseYear) {
    return __awaiter(this, void 0, void 0, function () {
        var newSong;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    newSong = new Song_1.Song();
                    newSong.songTitle = songTitle;
                    newSong.artist = artist;
                    newSong.album = album;
                    newSong.genera = genera;
                    newSong.releaseYear = releaseYear;
                    return [4 /*yield*/, songRepository.save(newSong)];
                case 1:
                    // Then save it to the data base
                    newSong = _a.sent();
                    return [2 /*return*/, newSong];
            }
        });
    });
}
exports.addSong = addSong;
function getSongByAlbum(albumName) {
    return __awaiter(this, void 0, void 0, function () {
        var songs;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, songRepository
                        .createQueryBuilder('song')
                        .where('album = :albumName', { albumName: albumName })
                        .select(['song.songTitle', 'song.artist', 'song.genera'])
                        .getMany()];
                case 1:
                    songs = _a.sent();
                    return [2 /*return*/, songs];
            }
        });
    });
}
exports.getSongByAlbum = getSongByAlbum;
function getSongbyGenera(genera) {
    return __awaiter(this, void 0, void 0, function () {
        var songGenera;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, songRepository
                        .createQueryBuilder('song')
                        .where('genera = :genera', { genera: genera })
                        .select(['song.songTitle', 'song.album', 'song.artist'])
                        .getMany()];
                case 1:
                    songGenera = _a.sent();
                    return [2 /*return*/, songGenera];
            }
        });
    });
}
exports.getSongbyGenera = getSongbyGenera;
function getSongbyArtist(artistName) {
    return __awaiter(this, void 0, void 0, function () {
        var songArtist;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, songRepository
                        .createQueryBuilder('song')
                        .where('artist = :artistName', { artistName: artistName })
                        .select(['song.album', 'song.songTitle', 'song.genera'])
                        .getMany()];
                case 1:
                    songArtist = _a.sent();
                    return [2 /*return*/, songArtist];
            }
        });
    });
}
exports.getSongbyArtist = getSongbyArtist;
function getSongbyTitle(songTitle) {
    return __awaiter(this, void 0, void 0, function () {
        var title;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, songRepository
                        .createQueryBuilder('song')
                        .where('title = :songTitle', { songTitle: songTitle })
                        .select(['song.artist', 'song.album', 'song.releaseYear'])
                        .getMany()];
                case 1:
                    title = _a.sent();
                    return [2 /*return*/, title];
            }
        });
    });
}
exports.getSongbyTitle = getSongbyTitle;
function getSongbyID(songID) {
    return __awaiter(this, void 0, void 0, function () {
        var ID;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, songRepository.findOne({ where: { songID: songID } })];
                case 1:
                    ID = _a.sent();
                    return [2 /*return*/, ID];
            }
        });
    });
}
exports.getSongbyID = getSongbyID;
function getSongsByYear(releaseDate) {
    return __awaiter(this, void 0, void 0, function () {
        var songs;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, songRepository
                        .createQueryBuilder('song')
                        .where('releaseYear = :releaseDate', { releaseDate: releaseDate })
                        .select(['song.songTitle', 'song.artist', 'song.album', 'song.genera'])
                        .getMany()];
                case 1:
                    songs = _a.sent();
                    return [2 /*return*/, songs];
            }
        });
    });
}
exports.getSongsByYear = getSongsByYear;
